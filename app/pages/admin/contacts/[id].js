import { useState, useEffect } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Layout from '../../../components/Layout.js'
import md from 'markdown-it'

export default function Contacts({id}) {
  const [contact, setContact] = useState(null)
  const supabase = useSupabaseClient()
  const contactId = parseInt(id)
  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase.from('contacts').select(`*`).eq(`id`, id)
      setContact(data[0])
    })()
  }, [id])
  return (
    <Layout
      title="Admin Contacts"
      description="Generated by create next app"
      >
      <h1 className='wt-title text-darkblue text-center'>
        <span>Contact</span> message 
      </h1>
      {contact && (
        <div className="overflow-hidden divide-y divide-slate-200 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <div className="bg-slate-50">
            <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:text-slate-500 [&_dt]:pr-3">
              <dt>Name</dt>
              <dd>{contact.lastname}, {contact.firstname}</dd>
              <dt>Email</dt>
              <dd>{contact.email}</dd>
            </dl>
          </div>
          <div className="px-3 py-10 bg-white">
            <div dangerouslySetInnerHTML={{ __html: md().render(contact.message)}} />
          </div>
        </div>
      )}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
        id: context.params.id
    },
  }
}