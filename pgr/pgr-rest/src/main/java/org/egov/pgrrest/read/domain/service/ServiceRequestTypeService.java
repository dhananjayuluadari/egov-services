package org.egov.pgrrest.read.domain.service;

import org.egov.pgrrest.common.entity.ServiceType;
import org.egov.pgrrest.read.domain.model.ServiceTypeSearchCriteria;
import org.egov.pgrrest.read.persistence.repository.ServiceRequestTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceRequestTypeService {

    private final ServiceRequestTypeRepository serviceRequestTypeRepository;

    @Autowired
    public ServiceRequestTypeService(final ServiceRequestTypeRepository serviceRequestTypeRepository) {
        this.serviceRequestTypeRepository = serviceRequestTypeRepository;
    }

    public ServiceType getComplaintType(String complaintTypeCode, String tenantId) {
        return serviceRequestTypeRepository.getServiceRequestType(complaintTypeCode, tenantId);
    }

    public List<ServiceType> findByCriteria(ServiceTypeSearchCriteria searchCriteria) {
        searchCriteria.validate();
        return findServiceTypesByCriteria(searchCriteria);
    }

    private List<ServiceType> findServiceTypesByCriteria(ServiceTypeSearchCriteria searchCriteria) {
        if (searchCriteria.isCategorySearch()) {
            return serviceRequestTypeRepository.findActiveServiceRequestTypesByCategoryAndTenantId(searchCriteria.getCategoryId(),
                    searchCriteria.getTenantId());
        } else if (searchCriteria.isFrequencySearch()) {
            return serviceRequestTypeRepository.getFrequentlyFiledServiceRequests(searchCriteria.getCount(),
                    searchCriteria.getTenantId());
        } else if (searchCriteria.isReturnAll()) {
            return serviceRequestTypeRepository.getAllServiceTypes();
        }
        return null;
    }
}
