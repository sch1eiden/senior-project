import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
	const scrollToTop = () => {
		scroll.scrollToTop()
	}
	return (
		<footer id='footer' className='py-1 bg-light text-black-60'>
			<div class='container text-center'>
				<div className='row'>
					<div className='col-sm'>
						<small>Copyright &copy; Smart Bin</small>
					</div>
					<div className='col-sm-12'>
						<button className='btn btn-primary' onClick={scrollToTop}>
							Back to Top
						</button>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
