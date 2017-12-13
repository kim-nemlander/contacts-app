using ContactsWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsWebApi.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private List<Contact> _contacts;

        public ContactRepository()
        {
            _contacts = new List<Contact>();
            Initialize();
        }

        public List<Contact> GetAll()
        {
            return _contacts;
        }

        public Contact GetById()
        {
            throw new NotImplementedException();
        }

        private void Initialize()
        {
            _contacts = new List<Contact>
            {
                new Contact(1, "Kimi", "Nemlander", "0123456789", "Kirkkokatu 10", "Lappeenranta"),
                new Contact(1, "Joku", "Toinen", "9876543210", "Valtakatu 12", "Lappeenranta"),
            };
        }
    }
}
