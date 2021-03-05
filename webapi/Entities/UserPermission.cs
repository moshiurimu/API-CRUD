using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class UserPermission:BaseEntity
    {
        public UserPermission(string view, bool status, int order)
        {
            View = view;
            Status = status;
            Order = order;
        }

        public string View { get; set; }
        public bool Status { get; set; }
        public int Order { get; set; }

    }
}
