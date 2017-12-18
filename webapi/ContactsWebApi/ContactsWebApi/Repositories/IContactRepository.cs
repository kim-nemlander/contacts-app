using ContactsWebApi.Models;
using System.Collections.Generic;

namespace ContactsWebApi.Repositories
{
    public interface IContactRepository
    {
        List<Contact> GetAll();
        Contact GetById(int id);

        //TODO add, update, delete
    }
}
