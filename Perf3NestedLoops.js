// 1. 𝗡𝗲𝘀𝘁𝗲𝗱 𝗹𝗼𝗼𝗽: 𝙊(𝙣^2) time complexity.
// 2. 𝗢𝗯𝗷𝗲𝗰𝘁 𝗺𝗮𝗽𝗽𝗶𝗻𝗴: 𝙊(𝙣) time complexity.

const organisation = [{orgId: 1, orgName: "Tech"},{orgId: 2, orgName: "Non-tech"}];

const employees = [{name: 'Ram', orgId: 1},{name: 'Shyam', orgId: 2}];

let orgMap = organisation.reduce((accumulator, currValue) => {
    accumulator[currValue.orgId] = currValue.orgName;
    return accumulator;
},{});

employees.forEach((employee) => {
    const orgName = orgMap[employee.orgId];
    console.log(`${employee.name}: ${orgName || 'unknown'}`)
})

