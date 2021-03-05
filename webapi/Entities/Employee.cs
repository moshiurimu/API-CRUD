using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class Employee : BaseEntity
    {
        public Employee(string name, string designation, string contactNo, string address)
        {
            Name = name;
            Designation = designation;
            ContactNo = contactNo;
            Address = address;
        }

        public string Name { get; set; }
        public string Designation { get; set; }
        public string ContactNo { get; set; }
        public string Address { get; set; }
    }
}
