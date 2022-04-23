import './ScreenSize.scss';

import notFound__img from '../../images/bee__not__found.png'
export function ScreenSize() {
    return (
      <div className='container__not__found'>
        <div className='mid__wrapper'>
        <img src={notFound__img} alt="page not found" />
        <h1>Increase page size!</h1>
        </div>
      </div>
    )
  }