import React, { use } from 'react'

interface Props {
    params: Promise<{id: string}>
};

const UserDetailPage = ({params} : Props) => {
  const { id } = use(params);
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage