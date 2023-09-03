import HeaderModule from '../css/Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className={HeaderModule.tab}>
          1
          <div className={HeaderModule.dropdown}>
            1-1
          </div>
        </div>
        <div className={HeaderModule.tab}>
          2
          <div className={HeaderModule.dropdown}>
            2-1
          </div>
        </div>
        <div className={HeaderModule.tab}>
          3
          <div className={HeaderModule.dropdown}>
            3-1
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;