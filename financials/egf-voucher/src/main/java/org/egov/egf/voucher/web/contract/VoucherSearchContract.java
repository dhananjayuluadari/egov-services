package org.egov.egf.voucher.web.contract;

import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class VoucherSearchContract extends VoucherContract {

	private String ids;

	private String sortBy;

	private Integer pageSize;

	private Integer offset;

	private String glcode;

	private BigDecimal debitAmount;

	private BigDecimal creditAmount;

	private String accountDetailTypeId;

	private String accountDetailKeyId;

	private BigDecimal subLedgerAmount;

	private String types;

	private String names;

	private String voucherNumbers;

	private String statuses;

	private String voucherFromDate;

	private String voucherToDate;

}