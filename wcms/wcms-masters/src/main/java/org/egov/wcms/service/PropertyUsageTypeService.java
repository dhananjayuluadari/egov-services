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

package org.egov.wcms.service;


import java.util.List;

import org.egov.wcms.model.PropertyUsageType;
import org.egov.wcms.producers.PropertyUsageTypeProducer;
import org.egov.wcms.repository.PropertyUsageTypeRepository;
import org.egov.wcms.web.contract.PropertyUsageTypeGetRequest;
import org.egov.wcms.web.contract.PropertyUsageTypeRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.concurrent.ThreadLocalRandom;
@Service
public class PropertyUsageTypeService {

    public static final Logger logger = LoggerFactory.getLogger(UsageTypeService.class);

    @Autowired
    private PropertyUsageTypeRepository propUsageTypeRepository;

    @Autowired
    private PropertyUsageTypeProducer propUsageTypeProducer;

   public PropertyUsageTypeRequest create(final PropertyUsageTypeRequest propUsageTypeRequest) {
       return propUsageTypeRepository.persistCreateUsageType(propUsageTypeRequest);
   }
   
   public PropertyUsageType createPropertyUsageType(final String topic,final String key,final PropertyUsageTypeRequest propUsageTypeRequest) {
       final ObjectMapper mapper = new ObjectMapper();
       String propUsageTypeValue = null;
       try {
           logger.info("createPropertyUsageType service::" + propUsageTypeRequest);
           propUsageTypeValue  = mapper.writeValueAsString(getIdForRequestCodes(propUsageTypeRequest));
           logger.info("usageTypeValue::" + propUsageTypeValue);
       } catch (final JsonProcessingException e) {
    	   logger.error(e.getMessage());
       }
       try {
    	   propUsageTypeProducer.sendMessage(topic,key,propUsageTypeValue);
       } catch (final Exception ex) {
           ex.printStackTrace();
       }
       return propUsageTypeRequest.getPropertyUsageType();
   }
   
   public List<PropertyUsageType> getPropertyUsageTypes(PropertyUsageTypeGetRequest propUsageTypeGetRequest) {
       return propUsageTypeRepository.getPropertyUsageType(propUsageTypeGetRequest);
   }
   
   public boolean checkPropertyUsageTypeExists(PropertyUsageTypeRequest propUsageTypeRequest){
	   // Get IDs for Property Type and Usage Type
	   getIdForRequestCodes(propUsageTypeRequest);
	   List<PropertyUsageType> propUsageTypes = propUsageTypeRepository.checkPropertyUsageTypeExists(propUsageTypeRequest.getPropertyUsageType().getPropertyTypeId(), 
			   propUsageTypeRequest.getPropertyUsageType().getUsageTypeId(), propUsageTypeRequest.getPropertyUsageType().getTenantId());
	   if(propUsageTypes.size() > 0){
		   return true;   
	   }
	   return false;
   }
   
	private PropertyUsageTypeRequest getIdForRequestCodes(PropertyUsageTypeRequest propUsageTypeRequest) {
		// Hit the Property Tax APIs to verify and get the IDs for the Code.
		// Once APIs are available, remove random number function. 
		int randomNum = ThreadLocalRandom.current().nextInt(1, 10 + 1);
		propUsageTypeRequest.getPropertyUsageType().setPropertyTypeId(randomNum);
		randomNum = ThreadLocalRandom.current().nextInt(1, 10 + 1);
		propUsageTypeRequest.getPropertyUsageType().setUsageTypeId(randomNum);
		
		return propUsageTypeRequest;
	}
   

}
