﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class BaseEntity
    {
        public int Id { get; set; }        
        public bool IsDelete { get; set; }
    }
}
