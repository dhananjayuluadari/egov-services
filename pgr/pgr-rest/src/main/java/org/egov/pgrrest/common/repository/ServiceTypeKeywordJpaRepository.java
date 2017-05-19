package org.egov.pgrrest.common.repository;

import org.egov.pgrrest.common.entity.ServiceTypeKeyword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceTypeKeywordJpaRepository extends JpaRepository<ServiceTypeKeyword, Long> {
    List<ServiceTypeKeyword> findByServiceCodeInAndTenantId(List<String> serviceCodes, String tenantId);
}
