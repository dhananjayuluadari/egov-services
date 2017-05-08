
let months=[
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];


class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        employees: {},
        attendance: [],
        month: "",
        year: "",
        code: "",
        designationCode: "",
        departmentCode: "",
        employeeType: "",
        startDate: undefined,
        endDate: undefined,
        caLength: 0 //CurrentAttendance length
    };
    this.handleCheckAll = this.handleCheckAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.markAttedance = this.markAttedance.bind(this);
    this.markBulkAttendance = this.markBulkAttendance.bind(this);
    this.save = this.save.bind(this);
  }

  save() {
      var employees = this.state.employees;
      var {
          month,
          year
      } = this.state;
      var attendance = []
      for (var emp in employees) {
          for (var att in employees[emp].attendance) {
             if(!/-id/.test(att)) {
                var date = new Date(year, month, att.split('-')[1]);
                var day = date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
                var monthIn = date.getMonth().toString().length === 1 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
                var yearIn = date.getFullYear();
                attendance.push({
                    attendanceDate: day + "/" + monthIn + "/" + yearIn,
                    employee: emp,
                    month: (month + 1),
                    year,
                    type: {
                        code: employees[emp].attendance[att]
                    },
                    remarks: "",
                    tenantId,
                    id: employees[emp].attendance[att + "-id"] || undefined
                });
             }
          }
      }

      this.setState({
          attendance
      });

      var body = {
          "RequestInfo": requestInfo,
          "Attendance": attendance
      };
      var response = $.ajax({
          url: baseUrl + "/hr-attendance/attendances/_create?tenantId=" + tenantId,
          type: 'POST',
          dataType: 'json',
          data: JSON.stringify(body),
          async: false,
          contentType: 'application/json',
          headers: {
              'auth-token': authToken
          }
      });

      // console.log(attendance);
      // console.log(response);
      if (response["status"] === 200) {
          alert("Successfully added");
          window.location.href = "app/hr/common/employee-attendance.html";
      } else {
          alert(response["responseJSON"][0]["error"]["description"]);
      }
  }



  // componentWillMount()
  // {
  //
  // }

  componentDidMount()
  {
    if(window.opener && window.opener.document) {
       var logo_ele = window.opener.document.getElementsByClassName("homepage_logo");
       if(logo_ele && logo_ele[0]) {
         document.getElementsByClassName("homepage_logo")[0].src = window.location.origin + logo_ele[0].getAttribute("src");
       }
     }
    //call employee api and get employees
    // console.log(getUrlVars()["month"]);
    var queryParam=getUrlVars();
    // console.log(queryParam["type"]);
    var endDate=(parseInt(queryParam["year"])==new Date().getFullYear()&&parseInt(queryParam["month"])==new Date().getMonth())?new Date():new Date(parseInt(queryParam["year"]), parseInt(queryParam["month"])+1, 0);
    // var now = new Date();
    // var startDate=new Date(typeof(queryParam["year"])==="undefined"?now.getFullYear():parseInt(queryParam["year"]), typeof(queryParam["month"])==="undefined"?now.getMonth():parseInt(queryParam["month"]), 1);
    // console.log(typeof(queryParam["month"])==="undefined"?now.getMonth():parseInt(queryParam["month"]));
    var now = new Date();
    // var startDate=new Date((typeof(queryParam["year"])==="undefined")?now.getFullYear():parseInt(queryParam["year"]), (typeof(queryParam["month"])==="undefined")?now.getMonth():parseInt(queryParam["month"]), 1);
    // console.log(startDate);
    var currentDate = new Date(queryParam["year"],queryParam["month"],1);

    try {
      var hrConfigurations = commonApiPost("hr-masters", "hrconfigurations", "_search", {
          tenantId
      }).responseJSON || [];
    } catch(e) {
      var hrConfigurations = [];
    }

    try {
      var employeesTemp = commonApiPost("hr-employee", "employees", "_search", {
          tenantId,
          departmentId: queryParam["departmentCode"],
          designationId: queryParam["designationCode"],
          employeeType: queryParam["type"],
          code: queryParam["code"],
          "assignment.isPrimary": true,
          asOnDate: (currentDate.getDate().toString().length == 2 ? currentDate.getDate() : "0" + currentDate.getDate()) + "/" + (currentDate.getMonth().toString().length == 2 ? (currentDate.getMonth() + 1) : "0" + (currentDate.getMonth() + 1)) + "/" + currentDate.getFullYear(),
          pageSize:500
      }).responseJSON["Employee"] || [];
    } catch(e) {
      var employeesTemp = [];
    }

    var employee="";
    if (employeesTemp.length>0) {
        for (var i = 0; i < employeesTemp.length; i++) {
          employee+=employeesTemp[i]["id"]+",";
        }
    }

    try {
      var empLeaveList = commonApiPost("hr-leave", "leaveapplications", "_search", {
          tenantId,
          employee,
          pageSize:500
      }).responseJSON["LeaveApplication"] || [];
    } catch(e) {
      var empLeaveList = [];
    }


    try {
      var currentAttendance = commonApiPost("hr-attendance", "attendances", "_search", {
          tenantId,
          month: parseInt(queryParam["month"]) + 1,
          year: queryParam["year"],
          pageSize: 9999,
          pageNumber: 1 ,
          departmentId: queryParam["departmentCode"],
          designationId: queryParam["designationCode"],
          code: queryParam["code"]
      }).responseJSON["Attendance"] || [];
    } catch(e) {
      var currentAttendance = [];
    }

    try {
      var allHolidayList = commonApiPost("egov-common-masters", "holidays", "_search", {
        tenantId
      }).responseJSON["Holiday"] || [];
    } catch(e) {
      var allHolidayList = [];
    }

    var employees = {}, holidayList = [], pattern = new RegExp(parseInt(queryParam["month"]) + 1, "i");
    for(var i=0; i<allHolidayList.length;i++) {
      if(allHolidayList[i].applicableOn && pattern.test(allHolidayList[i].applicableOn.split("-")[1])) {
        //var _date = allHolidayList[i].applicableOn.split("-");
        holidayList.push(new Date(allHolidayList[i].applicableOn).getTime()-19800000);
      }
    }

    for(var i=0; i<employeesTemp.length; i++)
    {
        employees[employeesTemp[i].id]={
          code:employeesTemp[i].code,
          name:employeesTemp[i].name,
          month:queryParam["month"],
          year:queryParam["year"],
          attendance:{}
        };
    }

    if(currentAttendance.length > 0) {
        for (var j = 0; j < currentAttendance.length; j++) {
          if(employees[currentAttendance[j].employee] && employees[currentAttendance[j].employee]["attendance"]) {
            employees[currentAttendance[j].employee]["attendance"][`${parseInt(queryParam["month"])}-${currentAttendance[j].attendanceDate.split("-")[2]}`]=currentAttendance[j].type.code;
            employees[currentAttendance[j].employee]["attendance"][`${parseInt(queryParam["month"])}-${currentAttendance[j].attendanceDate.split("-")[2]}` + "-id"] = currentAttendance[j].id;
          }
        }
    } else {
        //Merge employee with attendance
        for(var emp in employees) {
            // var daysOfYear = [];
            // console.log(Object.assign({}, startDate));
            var startDate = new Date((typeof(queryParam["year"])==="undefined")?now.getFullYear():parseInt(queryParam["year"]), (typeof(queryParam["month"])==="undefined")?now.getMonth():parseInt(queryParam["month"]), 1);

            if(hrConfigurations["HRConfiguration"]["Weekly_holidays"][0]=="5-day week")
            {
              for (var d = startDate ; d <= endDate; d.setDate(d.getDate() + 1)) {
              //  daysOfYear.push(new Date(d));
                  if(holidayList.indexOf(d.getTime()) > -1 && hrConfigurations["HRConfiguration"]["Include_enclosed_holidays"][0]=="Y")
                    employees[emp].attendance[`${d.getMonth()}-${d.getDate().toString().length===1?"0"+d.getDate():d.getDate()}`] = "H";
                  else
                  employees[emp].attendance[`${d.getMonth()}-${d.getDate().toString().length===1?"0"+d.getDate():d.getDate()}`]=(d.getDay()===0||d.getDay()===6)?"H":"";
                  // console.log(employees[emp]);
              }
            }
            else {
              for (var d = startDate ; d <= endDate; d.setDate(d.getDate() + 1)) {
              //  daysOfYear.push(new Date(d));
                  if(holidayList.indexOf(d.getTime()) > -1 && hrConfigurations["HRConfiguration"]["Include_enclosed_holidays"][0]=="Y")
                    employees[emp].attendance[`${d.getMonth()}-${d.getDate().toString().length===1?"0"+d.getDate():d.getDate()}`] = "H";
                  else
                    employees[emp].attendance[`${d.getMonth()}-${d.getDate().toString().length===1?"0"+d.getDate():d.getDate()}`]=(d.getDay()===0)?"H":"";
                  // console.log(employees[emp]);
              }
              //w more
            }
            // empTemp.push(emp);
        }


        for (var k = 0; k < empLeaveList.length; k++) {
          if (empLeaveList[k].fromDate==empLeaveList[k].toDate) {
            var date=new Date();
            if (date.getFullYear()==empLeaveList[k].fromDate.split("-")[0] && date.getMonth()==empLeaveList[k].fromDate.split("-")[1]) {
              employees[empLeaveList[k].employee]["attendance"][`${parseInt(queryParam["month"])}-${empLeaveList[k].fromDate.split("-")[2]}`]="L";
            }
          }
          else {
            var fromDate=new Date(empLeaveList[k].fromDate.split("-")[0],empLeaveList[k].fromDate.split("-")[1],empLeaveList[k].fromDate.split("-")[2]);
            var toDate=new Date(empLeaveList[k].toDate.split("-")[0],empLeaveList[k].toDate.split("-")[1],empLeaveList[k].toDate.split("-")[2]);
            var date=new Date();
            for (var f = fromDate; f <= toDate; f.setDate(f.getDate() + 1)) {
              if (date.getFullYear()==f.getFullYear() && date.getMonth()==f.month) {
                  employees[empLeaveList[f].employee]["attendance"][`${parseInt(queryParam["month"])}-${f.getDate()}`]="L";
              }
            }


            // if (date.getFullYear()==empLeaveList[i].fromDate.split("-")[0] && date.getMonth()==empLeaveList[i].fromDate.split("-")[1]) {
            //   employees[empLeaveList[i].employee]["attendance"][-]="L";
            // }
          }
        }

    }

    this.setState({
        month:parseInt(queryParam["month"]),
        year:parseInt(queryParam["year"]),
        code:queryParam["code"],
        designationCode:queryParam["designationCode"],
        departmentCode:queryParam["departmentCode"],
        employeeType:queryParam["employeeType"],
        endDate,
        employees
    })
  }

  componentDidUpdate(nextprops,nextState)
  {
    // $('#attendanceTable').DataTable({
    //   dom: 'Bfrtip',
    //   buttons: [
    //            'copy', 'csv', 'excel', 'pdf', 'print'
    //    ],
    //    ordering: true
    // });
  }

  close(){
      // widow.close();
      open(location, '_self').close();
  }

  handleCheckAll(e,date,type)
  {
      this.markBulkAttendance(date,type);
  }

  markBulkAttendance(oDate,type)
  {
    var employees=this.state.employees;
    var date=`${oDate.getMonth()}-${oDate.getDate().toString().length===1?"0"+oDate.getDate():oDate.getDate()}`;
    for(var emp in employees)
    {
      var now = new Date();
      employees[emp].attendance[date]=type;
      // this.markAttedance(type,emp,date);
    }
    this.setState({
        employees:employees
    })
  }

  handleChange(e,empCode,date)
  {
    // console.log(e.target.value);
    // if (!this.isValidType(e.target.value)&&e.target.value!="") {
    //     alert("Pleae Enter Valid Type")
    //     return;
    // } else {
        this.markAttedance(e.target.value,empCode,date);
      // }
  }

  markAttedance(value,empCode,date)
  {

      this.setState({
        employees:{
            ...this.state.employees,
            [empCode]:{
              ...this.state.employees[empCode],
              ["attendance"]:{
                  ...this.state.employees[empCode]["attendance"],
                  [date]:value
              }
            }
          }
      })

  }

  isValidType(value)
  {
      switch (value) {
        case "P":
          return "Present";
          break;
        case "A":
          return "Absent";
          break;
        case "CO":
          return "CompOff";
          break;
        case "L":
          return "LeavePaid";
          break;
        case "HP":
          return "HalfPresent";
          break;
        case "HLP":
          return "HalfLeavePaid";
          break;
        case "THLP":
          return "TwoHalfLeavesPaid ";
          break;
        case "LU":
          return "LeaveUnpaid";
          break;
        case "HLU":
          return "HalfLeaveUnpaid";
          break;
        case "THLU":
          return "TwoHalfLeavesUnpaid";
          break;
        case "OT":
          return "OverTime";
          break;
        case "CE":
          return "CompOffElligibe";
          break;
        case "H":
          return "Holiday";
          break;
        default:
          return "";
          break;
      }
  }



  render() {

    console.log(this.state);
    let {month,year,designationCode,departmentCode,code,type,endDate}=this.state;
  //  console.log(startDate);
    let {handleCheckAll,handleChange,save}=this;
    const showEmployee=function(employees)
    {
        return Object.keys(employees).map((k, index)=>
        {
          return (<tr key={employees[k].code}>
                      <td>{index+1}</td>
                      <td>{employees[k].code+"-"+employees[k].name}</td>
                      {createCalender("td",k,employees[k].attendance)}
                  </tr>)
        })

    }
    const getDay=function(day)
    {
      switch (day) {
        case 0:return "Sun";
          break;
        case 1:return "Mon";
          break;
        case 2:return "Tue";
          break;
        case 3:return "Wed";
          break;
        case 4:return "Thu";
          break;
        case 5:return "Fri";
          break;
        default:return "Sat";
          break;
      }
    }
    const getColor=function(type)
    {
        switch (type) {
          case "P":
            return "inputBoxGreen"
            break;
          case "H":
            return "inputBoxWarning"
            break;
          case "A":
            return "inputBoxRed"
            break;
          default:
            return ""
            break;

        }
    }
    const createCalender=function(type="th",empCode="",attendance={})
    {
        // console.log("emp code is " + empCode);
        var now = new Date();
        var daysOfYear = [];
        // var endDate=
        // console.log(now.getFullYear());
        // console.log(month);
        var startDate=new Date((typeof(year)==="undefined")?now.getFullYear():year, (typeof(month)==="undefined")?now.getMonth():month, 1);
        // console.log(new Date(typeof(year)==="undefined"?now.getFullYear():year, typeof(month)?now.getMonth():month, 1));
        for (var d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
            daysOfYear.push(new Date(d));
        }
        if(type=="th"&&daysOfYear.length>0)
        {

          return daysOfYear.map(function(item,index) {
                return (<th key={index} className="text-center">
                      {item.getDate()}
                      <br/>
                      {getDay(item.getDay())}
                      <div className="checkbox">
                          <label>
                            <input type="checkbox" onChange={(e)=>{handleCheckAll(e,item,e.target.checked?"P":"")}}/>
                          </label>
                      </div>


                  </th>);
          })
        }
        else if (daysOfYear.length>0) {
          return daysOfYear.map(function(item,index) {
                var date=`${item.getMonth()}-${item.getDate().toString().length===1?"0"+item.getDate():item.getDate()}`;
                return (<td key={index} className="text-center">
                            <input type="text" className={`form-control ${getColor(typeof(attendance[date])==="undefined"?"":attendance[date])}`} style={{width: "44px",fontSize: "10px",textAlign: "center"}}  value={typeof(attendance[date])==="undefined"?"":attendance[date]} onChange={(e)=>{
                                handleChange(e,empCode,date)
                            }}/>
                        </td>);
                      })
        }

    };
    return (
      <div>
          <h3>Attendance for the month of : {months[month]}-{year} </h3>
          <div className="attendance-table table-responsive">
              <table className="table table-bordered" id="attendanceTable">
                  <thead>

                      <tr>
                          <th>Sl.No</th>
                          <th>Name</th>
                          {createCalender()}
                      </tr>
                  </thead>

                  <tbody id="attendanceTableBody">
                    {showEmployee(this.state.employees)}
                  </tbody>

              </table>

          </div>


            <div className="text-center">
                <button type="button" id="addEmployee" className="btn btn-submit" onClick={(e)=>{save()}}>Save</button>
                <button type="button" className="btn btn-close" onClick={(e)=>{this.close()}}>Close</button>

            </div>



      </div>
    );
  }
}



ReactDOM.render(
  <Attendance />,
  document.getElementById('root')
);


// <div className="dropdown">
//     <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"  aria-expanded="true">
//       P
//       <span className="caret"></span>
//     </button>
//     <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
//       <li><a className="inputBoxGreen" href="#">P</a></li>
//       <li><a className="inputBoxRed" href="#">A</a></li>
//       <li><a className="inputBoxWarning" href="#">H</a></li>
//     </ul>
//   </div>
