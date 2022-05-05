var list = [];

function transformData(data) {
  if (data.children && data.children.length > 0) {
    data.children.map((child) => {
      list.push(builder(child));
      transformData(child);
    });
  }
}

function transform(arr) {
  let temp = [];
  arr.map((emp) => {
    if (emp.isRoot) {
      temp.push({ ...emp, children: [] });
    }
    if (emp.isHead) {
      temp[0].children.push({ ...emp, children: [] });
    }
    if (emp.isLead) {
      temp[0].children.map((head) => {
        if (head.deptId == emp.deptId) {
          head.children.push({ ...emp, children: [] });
        }
      });
    }
    if (emp.isMember) {
      temp[0].children.map((head) => {
        head.children.map((lead) => {
          if (lead.teamId == emp.teamId) {
            lead.children.push(emp);
          }
        });
      });
    }
  });
  return temp;
}

function builder(obj) {
  let transformedObject = {
    id: obj.id,
    position: obj.position,
    name: obj.name,
    dept: obj.dept,
    number: obj.number,
    email: obj.email,
  };
  return transformedObject;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { transformData, list, capitalize, builder, transform };
