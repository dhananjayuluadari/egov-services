package org.egov.pgr.contract;

import org.egov.common.contract.response.ResponseInfo;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CountResponse {
	
	@JsonProperty("ResponseInfo")
	private ResponseInfo responseInfo;
	
	@JsonProperty("count")
	private Double count;

}
