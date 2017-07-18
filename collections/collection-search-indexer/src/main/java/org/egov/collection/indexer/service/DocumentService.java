/*
 * eGov suite of products aim to improve the internal efficiency,transparency,
 *    accountability and the service delivery of the government  organizations.
 *
 *     Copyright (C) <2015>  eGovernments Foundation
 *
 *     The updated version of eGov suite of products as by eGovernments Foundation
 *     is available at http://www.egovernments.org
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program. If not, see http://www.gnu.org/licenses/ or
 *     http://www.gnu.org/licenses/gpl.html .
 *
 *     In addition to the terms of the GPL license to be adhered to in using this
 *     program, the following additional terms are to be complied with:
 *
 *         1) All versions of this program, verbatim or modified must carry this
 *            Legal Notice.
 *
 *         2) Any misrepresentation of the origin of the material is prohibited. It
 *            is required that all modified versions of this material be marked in
 *            reasonable ways as different from the original version.
 *
 *         3) This license does not grant any rights to any user of the program
 *            with regards to rights under trademark law for use of the trade names
 *            or trademarks of eGovernments Foundation.
 *
 *   In case of any queries, you can reach eGovernments Foundation at contact@egovernments.org.
 */
package org.egov.collection.indexer.service;

import org.egov.collection.indexer.contract.*;
import org.egov.collection.indexer.enricher.ReceiptRequestDocumentEnricher;
import org.egov.collection.indexer.repository.contract.ReceiptRequestDocument;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class DocumentService {
    private List<ReceiptRequestDocumentEnricher> documentEnrichers;

    public DocumentService(List<ReceiptRequestDocumentEnricher> documentEnrichers) {
        this.documentEnrichers = documentEnrichers;
    }

    public List<ReceiptRequestDocument> enrich(ReceiptRequest receiptRequest) {
        final List<ReceiptRequestDocument> documents = new ArrayList<ReceiptRequestDocument>();
        final Receipt receipt = receiptRequest.getReceipt();
        Bill bill = receipt.getBill();
        for(BillDetail billDetail:bill.getBillDetails()) {
            ReceiptRequestDocument document = new ReceiptRequestDocument();
            document.setTenantId(receipt.getTenantId());
            document.setPaymentMode(receipt.getInstrumentType());
            document.setConsumerName(bill.getPayeeName());
            document.setConsumerType(billDetail.getConsumerType());
            document.setConsumerCode(billDetail.getConsumerCode());
            document.setReceiptNumber(billDetail.getReceiptNumber());
            document.setReceiptDate(new Date(billDetail.getReceiptDate().getTime()));
            document.setChannel(billDetail.getChannel());
            document.setBillingService(billDetail.getBusinessService());
            document.setTotalAmount(billDetail.getTotalAmount());
            document.setPurpose(billDetail.getBillAccountDetails().get(0).getPurpose());
            documents.add(document);
        }
        documentEnrichers.stream()
            .filter(enricher -> enricher.matches(receiptRequest))
            .forEach(documentEnricher -> documentEnricher.enrich(receiptRequest, documents));
        return documents;
    }
}
