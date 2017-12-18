using ContactsWebApi.Models;
using System.Collections.Generic;
using System.Linq;

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

        public Contact GetById(int id)
        {
            return _contacts.FirstOrDefault(c => c.Id == id);
        }

        private void Initialize()
        {
            _contacts = new List<Contact>
            {
                new Contact(1, "Kimi", "Nemlander", "0123456789", "Kirkkokatu 10", "Lappeenranta"),
                new Contact(2, "Joku", "Toinen", "9876543210", "Valtakatu 12", "Lappeenranta"),
            };
        }
    }
}
