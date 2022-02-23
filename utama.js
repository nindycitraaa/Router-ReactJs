import React from 'react';
import { Routes,Route} from 'react-router-dom';

import beranda from './beranda';
import Data_petugas from './Data_petugas';
import Data_siswa from './Data_siswa';
import transaksi from './transaksi';
import histori from './histori';
import logout from './logout';

const Utama = () => (
    <Routes>
        <Route exact path="/" element={<beranda/>}/>
        <Route path="/Data_petugas" element={<Data_petugas/>}/>
        <Route path="/Data_siswa" element={<Data_siswa/>}/>
        <Route path="/transaksi" element={<transaksi/>}/>
        <Route path="/histori" element={<histori/>}/>
        <Route path="/logout" element={<logout/>}/>
    </Routes>
)

export default Utama;