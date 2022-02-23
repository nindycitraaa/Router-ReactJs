import React from 'react';
import utama from './Component/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div> <hr />
        <Link to="/">beranda</Link> |
        <Link to="/Data_petugas">Data_petugas</Link>  |
        <Link to="/Data_siswa">Data_petugas</Link>  |
        <Link to="/transaksi">transaksi</Link>  |
        <Link to="/histori">histori</Link>  |
        <Link to="/logout">logout</Link> <hr />
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;