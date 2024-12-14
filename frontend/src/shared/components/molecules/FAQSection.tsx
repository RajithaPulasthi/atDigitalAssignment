import FAQComponent from '../atoms/FAQComponent'
import TitleComponent from '../atoms/TitleComponent'

const FAQSection = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <TitleComponent text='Frequently asked questions' />
        <FAQComponent />
    </div>
  )
}

export default FAQSection