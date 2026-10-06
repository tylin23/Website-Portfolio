import SmartLink from '@/components/SmartLink'

const TagItemMiddle = ({ tag, selected = false }) => {
  return (
    <SmartLink
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`cursor-pointer inline-block max-w-full rounded-xl hover:text-white duration-200
        mr-2 py-0.5 px-2 text-md whitespace-nowrap text-white ${selected ? 'bg-black' : 'bg-blue-700'}`}>
      <div className='font-light'>
        {selected && <i className='mr-1 fas fa-tag' />}
        {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
      </div>
    </SmartLink>
  )
}

export default TagItemMiddle
