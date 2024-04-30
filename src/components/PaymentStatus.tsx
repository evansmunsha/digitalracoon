'use client'

import { trpc } from '@/trpc/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface PaymentStatusProps {
  orderEmail: string
  orderId: string
  isPaid: boolean
}

const PaymentStatus = ({
  orderEmail,
  orderId,
  isPaid,
}: PaymentStatusProps) => {
  const router = useRouter()

  const { data } = trpc.payment.pollOrderStatus.useQuery(
    { orderId },
    {
      enabled: isPaid === false,
      refetchInterval: (data) =>
        (data?.isPaid ? false : 1000),
    }
  )

  useEffect(() => {
    if (data?.isPaid) router.refresh()
  }, [data?.isPaid, router])

  return (
    <div className='mt-16 grid lg:grid-cols-2 grid-cols-1 gap-x-4 text-sm text-gray-600'>
      <div className='text-wrap flex flex-col'>
        <p className='font-medium text-gray-900'>
          Shipping To
        </p>
        <p className='text-wrap flex text-blue-600 w-full'>{orderEmail}</p>
      </div>

      <div>
        <p className='font-medium text-gray-900 mt-3 lg:mt-0'>
          Order Status
        </p>
        <p>
          {isPaid
            ? 'Payment successful'
            : 'Pending payment'}
        </p>
      </div>
    </div>
  )
}

export default PaymentStatus
