import React from 'react'

export const Footer = () => {
  return (
    <div className='flex flex-col bg-[#E8E8EA] pt-16 '>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div className=' h-56 flex mx-[30%] gap-[10%]'>
            <div className='w-60'>
                <button className='text-2xl'>About</button>
                <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <ul>
                    <li>
                    Email : info@jstemplate.net
                    </li>
                    <li>
                    Phone : 880 123 456 789
                    </li>
                </ul>
            </div>
            <div className='flex flex-col justify-center'>
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
            </div>
            <div className='flex gap-5'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>

        </div>
       
    </div>
  )
}
