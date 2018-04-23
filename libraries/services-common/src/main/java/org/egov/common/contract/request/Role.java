package org.egov.common.contract.request;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Role {

	@JsonProperty("name")
	private String name;

	@JsonProperty("code")
	@NotNull
	private String code;

	@JsonProperty("description")
	private String description;

}
