
function sum(a, b) {
       return a + b;
} 

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });


const { response } = require('express');
let server = require('../app');

const request = require('supertest')

describe('Firestation endpoint', () => {
    it('gets the test endpoint getAll', async () => {
        try{const res = await request(server)
          .get('/firestation')
    
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });

    it('gets the test endpoint getAllStation', async () => {
        try{const res = await request(server)
          .get('/firestation/station')
    
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });

    it('gets the test endpoint getById', async () => {
        try{const res = await request(server)
          .get('/firestation/one/1')
    
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
   
    it('gets the test endpoint add', async () => {
        try{const res = await request(server)
          .post('/firestation/add')
          .send({
            address: "test",
            station: 11
          });
    
        expect(res.status).toEqual(200);
        expect(res.body.address).toBe('test');
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });

    it('gets the test endpoint update', async () => {
        try{const res = await request(server)
          .put('/firestation/update/14')
          .send({
            address: "Test",
            station: 12
          });
    
        expect(res.status).toEqual(200);
        expect(res.body.address).toBe('Test');
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });

    it('gets the test endpoint delete', async () => {
        try{const res = await request(server)
          .delete('/firestation/delete/29')
    
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(0);
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
    
});

describe('MedicalRecord endpoint', () => {
    it('gets the test endpoint getAll', async () => {
        try{const res = await request(server)
          .get('/medicalrecord')
    
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
   
    it('gets the test endpoint getById', async () => {
        try{const res = await request(server)
          .get('/medicalrecord/one/1')
    
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
   
    it('gets the test endpoint add', async () => {
        try{const res = await request(server)
          .post('/medicalrecord/add')
          .send({
              firstName: 'test', 
              lastName: 'Test', 
              birthdate: "1980-08-02", 
              medications: ["test"], 
              allergies: ["test"]
           });
    
        expect(res.status).toEqual(200);
        expect(res.body.firstName).toBe('test');
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
   
    it('gets the test endpoint update', async () => {
        try{const res = await request(server)
          .put('/medicalrecord/update/24')
          .send({
            firstName: 'Test', 
            lastName: 'Test', 
            birthdate: "1991-08-02", 
            medications: ["test"], 
            allergies: ["test"]
         });
    
        expect(res.status).toEqual(200);
        expect(res.body.lastName).toBe('Test');
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
   
    it('gets the test endpoint delete', async () => {
        try{const res = await request(server)
          .delete('/medicalrecord/delete/25')
    
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(0);
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
    
  });

  describe('Persons endpoint', () => {
    it('gets the test endpoint getAll', async () => {
        try{const res = await request(server)
          .get('/person')
    
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
   
    it('gets the test endpoint getById', async () => {
        try{const res = await request(server)
          .get('/person/one/1')
    
        expect(res.status).toEqual(200);
        expect(res.body).toBeTruthy();
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
   
    it('gets the test endpoint add', async () => {
        try{const res = await request(server)
          .post('/person/add')
          .send({
            firstName: "Test", 
            lastName: "Test", 
            address: "test road", 
            city: "test City", 
            zip: "93400", 
            phone: "817-005-8423", 
            email: "test@email.com", 
            firestationId: 30, 
            id_medicalrecord: 3
          });
    
        expect(res.status).toEqual(200);
        expect(res.body.firstName).toBe('Test');
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
   
    it('gets the test endpoint update', async () => {
        try{const res = await request(server)
          .put('/person/update/6')
          .send({
            firstName: "Test", 
            lastName: "Test", 
            address: "test road", 
            city: "test City", 
            zip: "93400", 
            phone: "817-005-8423", 
            email: "test@email.com", 
            firestationId: 30, 
            id_medicalrecord: 3
          });
    
        expect(res.status).toEqual(200);
        expect(res.body.lastName).toBe('Test');
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
   
    it('gets the test endpoint delete', async () => {
        try{const res = await request(server)
          .delete('/person/delete/11')
    
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(0);
        } catch (err) {
            // write test for failure here
            console.log(`Error ${err}`)
        }
    });
    
  });
   

