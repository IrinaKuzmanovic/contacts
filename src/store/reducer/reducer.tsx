export const GET_DETAILS = 'GET_DETAILS'

const initialState = {
  details: [
    {
      id: 1,
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      phoneNumber: '+38160123456'
    },
    {
      id: 2,
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      phoneNumber: '+38160123456'
    },
    {
      id: 3,
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      phoneNumber: '+38160123456'
    },
    {
      id: 4,
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      phoneNumber: '+38160123456'
    },
    {
      id: 5,
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      phoneNumber: '+38160123456'
    },
    {
      id: 6,
      name: 'Jack Williamson',
      email: 'jack.williamson@example.com',
      phoneNumber: '+38160123456'
    }
  ]
}

const Reducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case GET_DETAILS:
      return state
    default:
      return state
  }
}
export default Reducer
