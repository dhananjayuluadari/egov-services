INSERT INTO service (id,code,name,enabled,contextroot,displayname,ordernumber,parentmodule,tenantId) VALUES (nextval('SEQ_SERVICE'),'Employee Movement', 'Employee Movement', true, 'eis', 'Employee Movement', 14, (select id from service where name='EIS' and tenantid='default'), 'default');

insert into eg_action(id, name,url,servicecode,queryparams,parentmodule,ordernumber,displayname,enabled,createdby,createddate,lastmodifiedby,lastmodifieddate)values(nextval('SEQ_EG_ACTION'),'Create Employee Movement','/hr-employee-movement/movements/_create','EIS','tenantId=',(select id from service where name='Employee Movement' and contextroot='eis'),2,'Create Employee Movement',false,1,now(),1,now());
insert into eg_action(id, name,url,servicecode,queryparams,parentmodule,ordernumber,displayname,enabled,createdby,createddate,lastmodifiedby,lastmodifieddate)values(nextval('SEQ_EG_ACTION'),'Employee Movement Update','/hr-employee-movement/movements/{id}/_update','EIS','tenantId=',(select id from service where name='Employee Movement' and contextroot='eis'),4,'Employee Movementn Update',false,1,now(),1,now());
insert into eg_action(id, name,url,servicecode,queryparams,parentmodule,ordernumber,displayname,enabled,createdby,createddate,lastmodifiedby,lastmodifieddate)values(nextval('SEQ_EG_ACTION'),'Search Employee Movements','/hr-employee-movement/movements/_search','EIS','tenantId=',(select id from service where name='Employee Movement' and contextroot='eis'),6,'Search Employee Movements',false,1,now(),1,now());
insert into eg_action(id, name,url,servicecode,queryparams,parentmodule,ordernumber,displayname,enabled,createdby,createddate,lastmodifiedby,lastmodifieddate)values(nextval('SEQ_EG_ACTION'),'Search Movement Promotion Basis','/hr-employee-movement/promotionbasis/_search','EIS','tenantId=',(select id from service where name='Employee Movement' and contextroot='eis'),6,'Search Movement Promotion Basis',false,1,now(),1,now());
insert into eg_action(id, name,url,servicecode,queryparams,parentmodule,ordernumber,displayname,enabled,createdby,createddate,lastmodifiedby,lastmodifieddate)values(nextval('SEQ_EG_ACTION'),'Search Movement Transfer Reasons','/hr-employee-movement/transferreason/_search','EIS','tenantId=',(select id from service where name='Employee Movement' and contextroot='eis'),6,'Search Movement Transfer Reasons',false,1,now(),1,now());
insert into eg_action(id, name,url,servicecode,queryparams,parentmodule,ordernumber,displayname,enabled,createdby,createddate,lastmodifiedby,lastmodifieddate)values(nextval('SEQ_EG_ACTION'),'Search Movement Transfer Types','/hr-employee-movement/transfertypes/_search','EIS','tenantId=',(select id from service where name='Employee Movement' and contextroot='eis'),6,'Search Movement Transfer Types',false,1,now(),1,now());

insert into eg_roleaction(roleCode,actionid,tenantid)values('SUPERUSER', (select id from eg_action where name = 'Create Employee Movement'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('SUPERUSER', (select id from eg_action where name = 'Employee Movement Update'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('SUPERUSER', (select id from eg_action where name = 'Search Employee Movements'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('SUPERUSER', (select id from eg_action where name = 'Search Movement Promotion Basis'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('SUPERUSER', (select id from eg_action where name = 'Search Movement Transfer Reasons'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('SUPERUSER', (select id from eg_action where name = 'Search Movement Transfer Types'),'default');

insert into eg_roleaction(roleCode,actionid,tenantid)values('EMPLOYEE ADMIN', (select id from eg_action where name = 'Create Employee Movement'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('EMPLOYEE ADMIN', (select id from eg_action where name = 'Employee Movement Update'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('EMPLOYEE ADMIN', (select id from eg_action where name = 'Search Employee Movements'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('EMPLOYEE ADMIN', (select id from eg_action where name = 'Search Movement Promotion Basis'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('EMPLOYEE ADMIN', (select id from eg_action where name = 'Search Movement Transfer Reasons'),'default');
insert into eg_roleaction(roleCode,actionid,tenantid)values('EMPLOYEE ADMIN', (select id from eg_action where name = 'Search Movement Transfer Types'),'default');
