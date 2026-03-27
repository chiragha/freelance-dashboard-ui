import React from 'react'
  import StatusBadge from "../components/StatusBadge";

const JobTable = () => {
  return (
    <div>
    

<tr className="border-b">
  <td>Frontend Developer</td>
  <td>
    <StatusBadge status="Active" />
  </td>
  <td>25</td>
  <td className="text-blue-500 cursor-pointer">View</td>
</tr>

<tr className="border-b">
  <td>UI Designer</td>
  <td>
    <StatusBadge status="Pending" />
  </td>
  <td>10</td>
  <td className="text-blue-500 cursor-pointer">View</td>
</tr>
    </div>
  )
}

export default JobTable
