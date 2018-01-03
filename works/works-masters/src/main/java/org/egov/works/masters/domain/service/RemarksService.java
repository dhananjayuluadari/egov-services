package org.egov.works.masters.domain.service;

import org.egov.common.contract.request.*;
import org.egov.tracer.kafka.LogAwareKafkaTemplate;
import org.egov.works.commons.utils.CommonUtils;
import org.egov.works.masters.config.PropertiesManager;
import org.egov.works.masters.domain.repository.RemarksRepository;
import org.egov.works.masters.utils.MasterUtils;
import org.egov.works.masters.web.contract.*;
import org.egov.works.masters.web.contract.RequestInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RemarksService {

    @Autowired
    private LogAwareKafkaTemplate<String, Object> kafkaTemplate;

    @Autowired
    private PropertiesManager propertiesManager;

    @Autowired
    private MasterUtils masterUtils;

    @Autowired
    private RemarksRepository remarksRepository;

    public RemarksResponse create(RemarksRequest remarksRequest) {
        AuditDetails auditDetails = masterUtils.getAuditDetails(remarksRequest.getRequestInfo(),false);
        CommonUtils commonUtils = new CommonUtils();
        for (Remarks remarks : remarksRequest.getRemarks()) {
            remarks.setId(commonUtils.getUUID());
            remarks.setAuditDetails(auditDetails);
            for (RemarksDetail remarksDetail : remarks.getRemarksDetails()) {
                remarksDetail.setId(commonUtils.getUUID());
                remarksDetail.setAuditDetails(auditDetails);
                remarksDetail.setRemarks(remarks.getId());
            }
        }

        kafkaTemplate.send(propertiesManager.getWorksMasterRemarksCreateAndUpdateTopic(), remarksRequest);
        final RemarksResponse response = new RemarksResponse();
        response.setRemarks(remarksRequest.getRemarks());
        response.setResponseInfo(masterUtils.createResponseInfoFromRequestInfo(remarksRequest.getRequestInfo(), true));
        return response;
    }

    public RemarksResponse update(RemarksRequest remarksRequest) {
        AuditDetails auditDetails = masterUtils.getAuditDetails(remarksRequest.getRequestInfo(),false);
        CommonUtils commonUtils = new CommonUtils();
        for (Remarks remarks : remarksRequest.getRemarks()) {
            if(remarks.getId() != null)
              remarks.setId(commonUtils.getUUID());
            remarks.setAuditDetails(auditDetails);
            for (RemarksDetail remarksDetail : remarks.getRemarksDetails()) {
                if(remarksDetail.getId() != null)
                  remarksDetail.setId(commonUtils.getUUID());
                remarksDetail.setAuditDetails(auditDetails);
                remarksDetail.setRemarks(remarks.getId());
            }
        }

        kafkaTemplate.send(propertiesManager.getWorksMasterRemarksCreateAndUpdateTopic(), remarksRequest);
        final RemarksResponse response = new RemarksResponse();
        response.setRemarks(remarksRequest.getRemarks());
        response.setResponseInfo(masterUtils.createResponseInfoFromRequestInfo(remarksRequest.getRequestInfo(), true));
        return response;
    }

    public RemarksResponse search(RemarksSearchContract remarksSearchContract, final RequestInfo requestInfo ) {
        RemarksResponse remarksResponse = new RemarksResponse();
        remarksResponse.setRemarks(remarksRepository.search(remarksSearchContract));
        remarksResponse.setResponseInfo(masterUtils.createResponseInfoFromRequestInfo(requestInfo, true));
        return remarksResponse;
    }
}
