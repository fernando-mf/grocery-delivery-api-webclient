using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace shipping_app.Models
{
    public enum ErrorCodes
    {
        UnexpectedError,
        NoConnection,
        ServersOffline,
        MissingInfo,
        EmailDuplicate,
        ConfirmPassword,
        InvalidPassword,
        EmailNotConfirmed,
        IncorrectLogin
    }

    public class ResultModel
    {
        [Required]
        [Display(Name = "Success")]
        public bool success { get; set; }

        [Required]
        [Display(Name = "Error")]
        public ErrorCodes error { get; set; }

        [Required]
        [Display(Name = "Result Content")]
        public string resultContent { get; set; }

        public ResultModel()
        {
            success = true;
        }

        public ResultModel(ErrorCodes error)
        {
            success = false;
            this.error = error;
        }
    }
}