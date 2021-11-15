import UserStore from '../UserStore'

import ApiService from '../../services/api'

jest.mock( '../../services/api' )

describe( 'UserStore', () => {

  let store

  beforeEach(() => {
    store = new UserStore()
  })

  it( 'should create an empty user store', () => {
    expect( store.message ).toBe( '' )
    expect( store.data ).toEqual({})
  })

  describe( 'login', () => {
    beforeEach(() => {
      ApiService.mockImplementation(() => (
      {
        authenticateUser: data => (
          { token: 'ABC', ...data }
        )
      }))

      store = new UserStore()
    })

    it( 'should login user', async () => {
      store.data = { email: 'juan@mail.com', password: 'secret' }

      const result = await store.login()

      expect( result ).toEqual(
        { token: 'ABC', email: 'juan@mail.com', password: 'secret' }
      )

      expect( store.message ).toEqual( '' )
      expect( store.token ).toEqual( 'ABC' )
      expect( store.data ).toEqual(
        { email: 'juan@mail.com', password: 'secret' }
      )
    })

    it( 'should catch message if there is any', async () => {
      ApiService.mockImplementation(() => (
      {
        authenticateUser: () => ({ msg: 'error occurred' })
      }))

      store = new UserStore()

      const result = await store.login()

      expect( result ).toEqual({ msg: 'error occurred' })
      expect( store.message ).toEqual( 'error occurred' )
    })

    it( 'should fail gracefully if the API call throws an error', async () => {
      ApiService.mockImplementation(() => (
      {
        authenticateUser: () => { throw Error( 'Network crashed' ) }
      }))

      store = new UserStore()

      const result = await store.login()

      expect( result.error.message ).toEqual( 'Network crashed' )
      expect( store.message ).toEqual( 'Request failed. Please try again later.' )
    })
  })

  describe( 'update', () => {
    beforeEach(() => {
      ApiService.mockImplementation(() => (
      {
        updateUser: data => ({ ...data })
      }))

      store = new UserStore()
    })

    it( 'should update user', async () => {
      store.token = 'ABC'
      store.data = { email: 'juan@mail.com', password: 'secret' }

      const result = await store.update()

      expect( result ).toEqual({ success: true })

      expect( store.message ).toEqual( '' )
      expect( store.data ).toEqual(
        { email: 'juan@mail.com', password: 'secret' }
      )
    })

    it( 'should catch message if there is any', async () => {
      ApiService.mockImplementation(() => (
      {
        updateUser: () => ({ msg: 'error occurred' })
      }))

      store = new UserStore()

      store.token = 'ABC'
      store.data = { email: 'juan@mail.com', password: 'secret' }

      const result = await store.update()

      expect( result ).toEqual({ success: false, msg: 'error occurred' })
      expect( store.message ).toEqual( 'error occurred' )
    })

    it( 'should fail gracefully if the API call throws an error', async () => {
      ApiService.mockImplementation(() => (
      {
        updateUser: () => { throw Error( 'Network crashed' ) }
      }))

      store = new UserStore()

      store.token = 'ABC'
      store.data = { email: 'juan@mail.com', password: 'secret' }

      const result = await store.update()

      expect( result.error.message ).toEqual( 'Network crashed' )
      expect( store.message ).toEqual( 'Request failed. Please try again later.' )
    })
  })

  describe( 'logout', () => {
    beforeEach(() => {
      ApiService.mockImplementation(() => (
      {
        logoutUser: id => ({ id })
      }))

      store = new UserStore()
    })

    it( 'should logout user', async () => {
      store.token = 'ABC'
      store.data = { id: 14 }

      await store.logout()

      expect( store.data ).toEqual({})
      expect( store.token ).toBe( null )
    })

    it( 'should logout user even if the API call throws an error', async () => {
      ApiService.mockImplementation(() => (
      {
        logoutUser: () => { throw Error( 'Network crashed' ) }
      }))

      store = new UserStore()

      store.token = 'ABC'
      store.data = { id: 14 }

      const result = await store.logout()

      expect( store.data ).toEqual({})
      expect( store.token ).toBe( null )
    })
  })

})
