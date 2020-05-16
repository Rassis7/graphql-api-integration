// import getUser from '../../../../v1/users/userController'

export default {
  Query: {
    user: async (root, args, ctx) => {
      return { email: "pakldpakls@aoksdoask.com" }
    }
  },
  User: {
    clinics: async (root, args, ctx) => {
      return ClinicController.findClinicsByUser(root.iduser)
    }
  }
}
