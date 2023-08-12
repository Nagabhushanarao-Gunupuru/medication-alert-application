import {useEffect} from 'react'
import {toast} from 'react-toastify'

const Alert = ({medicationList}) => {
  useEffect(() => {
    const now = new Date()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()

    medicationList.forEach(medication => {
      medication.schedule.forEach(time => {
        const [hour, minute] = time.split(':')

        if (
          parseInt(hour) === currentHour &&
          parseInt(minute) === currentMinute
        ) {
          toast.info(
            `Time to take ${medication.medicine} (${medication.uses})`,
            {
              position: 'top-center',
              autoClose: false,
            },
          )
        }
      })
    })
  }, [medicationList])

  return null
}

export default Alert
