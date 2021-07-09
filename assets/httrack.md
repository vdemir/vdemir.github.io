git clone https://github.com/xroche/httrack.git --recurse
cd httrack
./configure --prefix=/usr && make -j8 && make install DESTDIR=/