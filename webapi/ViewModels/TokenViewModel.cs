using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.ViewModels
{
    public class TokenViewModel
    {


        public string Role { get; set; }
        public List<string> Permissions { get; set; }
        public string Token { get; set; }
    }
}
