

import React from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
// import Phone from "./assests/iphone12.png";
// import Watch from "./assests/watch.png";
// import Laptop from "./assests/lappy.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 998,
          title: "Watch",
          qty: 1,
          img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRIYGRgYHBoYGhkaGhgeGhgcHhwaGhwaGh4cIS4lHB4rIRwcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHz4rJScxND00PTE0NDQ0NDQ0NDY0NDQ0MTQ0NDQ0NDE0NDQ0NDQ0NDQ0NDY2NDQxNDU0NDQ0NP/AABEIAOMA3gMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQUGAwQHAv/EAEIQAAIABQEGBAUCAwcCBQUAAAECABESITEDBCIyQWFxBVGBkQYTQqHwsdFSYsEHFCNyguHxorIzY5LC0hUWJDRD/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAJBEBAQACAQMFAAMBAAAAAAAAAAECEQMSITETIjJBUWFxgUL/2gAMAwEAAhEDEQA/APXnaqwgr02OYOtNxmCLVc5gCLTc9ohWozGIqNVY94jMVMhiArNVYd4K1IkcwZabjtBVmKjmAItNz2iFKjMYio1Vj3iMxUyGICs1Vh3grSEjn94MtNx2gqzFRzAEWm57RCszUMftFU1WPeIxINIx+8BWNVh3iqwAkc/vEcU3EVVBFRzARFpue0QrM1DH7RVNVj3iMSDSMfvAVzVYQDSFPPHvBxTcQCzEzn9oAgpzzgVmauWfaCGrPKBaRp5Y94AzVWHeCPSJHMGWm47QRahM5gCLTc9ohWozGIqNVY94hak0jEBWaqw7wVpCk5/eDLTcdoKsxUc/tAEWm57QYTuO0FNVj3gxlYd4CIlNz2tBkquPvBCWscQZipkMQFZqrDveCtSJHMHWV1ziCqCJnMBFWm57WgVqNQx+0FNVjjMVmIMhiAMarDveCtSJHMGWm69oKoImcwEVabntaBWo1DH7QU1WOMxWYgyGIAxqsO94K0hSc/vBxTcQVQRUcwEUU3Pa0YvxzxrS2Za9RrtwoLs8syHIdTbEdH4o+KV2ZaFAfXYTRMBR/G55L5DJ6CZHl+3a2s7M71u7SrYgysJ0ryCidgMA9bxatMdt02r+0RjZNnXpU5P6KI4R8e68pDT0h6Of1aNDVmBup9jH386XIxG09Mb5o/G+uudPTPo//wAo5l+OHJqOih7Mwx7x59/fgM/nSOfZdpraQ/2ENo09I0/jhXs2zsOzg/qBGY2L4j2dxTXQ2JPu564+8edbPKwTnIeczG2bH8LuVDMVUkTkZzHoBElkbZpEDeBBBtNTOPopUZjEaxpeHaukagZAXJXB/wAw8o2HZ9oqUEW8x5HnEqudjVYd7wVqRI5g6yuucQVQRM5gIq03Pa0CszUMftBDVZu8GJBpGICsarDveCmVj3tBxTcQVartmAFqrDveAamx+0GUC4z7wVQbtmAirTc9rQKVGoY6wUlrNj2isxBkMQBjVYd7wVqRI5/eDAC4z7wVQRM5gIq03Pa0ClRqH3gpqs37RWYgyGIAxqsO94K0hI5/eDAC4z7x09u8QTTE2mWOEW7H05DqYi3Xkk27arTc9rRq/wAWfFCbORpaZVtd5EKeHTX+PU9rLk9ACYx2v43tW1ah0dInSRePUVGaU52VpbzCXKQBIzeXR/8AtAAsRqOzMamZ2WbMZAklmnOwivXF5hftrm0uqlmOsz6zkl9SVJJ5sSLyFhK05KJC0sfqMhJIdxM23j+942w/BOob/M7yVGHpfH55xwv8I6osroT/AAsgBPuv9Yr14r9NayXXlqOM/UfQR1No1iBbUcnEqjcz/wCJRmfEfB9XT49nF7TQsD7zZftGu7ZoEAkBv4RMYP1Hra3q3lFtodDadoaqkNV9wTzlz9ekZPQ2lUWgG5kzEYExwgm/X1jpeGaDuwXRRn1DMSCzlfI8u5lnyjefgL4KdtoOptWnQulJgjFSdR8gmRIKjn5m3nES99F8bbf8D+AnSRdfWG+wmqfwDkSDhj9u+NvKTNXLPW0ENXF+0CxBpGMR0clZqrD7xxaGkqEgTvkDE/MeUcrKBcZ94KoImcwEVabntaBSozGIKS1mx7RWYgyGIAxqsO94K1IpOfteDim6/vBVBEzmAirTc9rRSJ3Ha8RDVxftBiVsuPeAKtNz2tBkquPvBSTZse0GYgyXHvAVmqsO94K1NjBgBdc+8FUETbMBFWm57WgVq3h+SgpJs2Pa8VmIMhiAM1Vh3vBWpsYMAOHPvHV23al01LNKd82xzMuX+w5xFsk3Uyb7G1a/yxaRYiw8h/EZ4Ea5r66TZmIYm5J4f9/W3SMX4j42WbmSxsv1MeRMsduXK+ePQ2VnFbmcgWAAmBK5pXmR5nnbnKMeWeWeWsWnHCYzeTtaviJey1MB5bqD3kPYR8aYc40x6VH/ALVh4euo7gjSkgmCSwmGDUyqNiCJcFwQQZ2JyOqqI6I7oHesaasGcveuxYidKj2i2PBb8qreaTxHVodb0EdRUPuQI5dHxl1kritPJs91POOJNmRNZlGrpV0g0AHTdUnpoWqDEy3CAQBI6jXvHa2jZwZhrTqO+d0KBalwCSxzJpnilKQi3o2eKj1ZfMZTQdHWpDUnMETYdxzH37xgfiD4WbWUDZ3QK8gysARJmLF9Nhf6maRN7yIjH7HtzaLh0aazpNxc5KMATJuYkSOYJydnO2qgGtp303JYj+FjxSHKcpy8wf4hETLW99qmz8dLwv4STZkCaecs54nbzPTyHKOXX1GQTY0sp3WsDPPO0pZnaM3oeIo4nMYnGreI7SdTUMr3pUeZnf7mK3U7yrY7vats8P2wa+mrLm4PkGUlWFuoMdoNIU88dLx0PB/Dhs+immsrTJpxNiWMh5TMd8ASmeL+vK0asd6m/LNdbukVabntaDJVvCCkmzY9oMxBkuIshWaqw73grU7p/JwYAXXPvBVBEzmAirTc9rQK1GoY/aCmdmx7RWYgyGIAzVWHe8FNNj3tBhLh/eCqDds+0AZqrDvBXpsYMALrn3goBu2faAirTc9oFat4RVJPFj2iEkGS494Cs1Vh3gGp3fy8GAHDn3tBQCJtmA+GIQFjiXKPOPi3xypmE91TIgfUwwo8wv6zMbX8U+JNp6ZE960v8xmF9pM3+kR5t4fo/M1pz3NOwPKvJb/SJnuB5xl5st3pjTw46nVWU8L0Qkn1iAzGm/pujoJifMkhRc33PZNgnvPi4HIspkQHHIWACeQvkqMRp+HsoOumn886ag6WirIFZ7EEM0gtIJJMzMtMfwx2fCvihWDLr7PtOg+mBWdXT3DNggIdZq02IFpc+QJjrx4TGfy5cmdyrWPHdo11120dQHU1NHV0tp2Q6SkV6auvzdIqLF1Rx3Ejzvmvidf/AMzw4i3+Lqj30m842fZ2RhWhDK+9UpqDTAEwZylJRi1owPxFsOo+rseqmmW+Vrh9QTG6lLr53lPl5x0c2pfEJOrq7YoMvm6uyeH6csyn8zVA/wDV9o3bx7xJdn0xLTrd2GnpaIlPUc4XooFyeQHpGq+C+F6x19l+ZpMk9fa9s1pidLmaaSkiYnTIi+BG8v4Qh112kgl1Qos2JVATNiqmysbAkZAgMLq+BKpI3grIFRBeTCZCTHVphzikXAG9x+BM3+JszkzYEriYZf6291jM7Z4log/LOoQzNQCquwV8gVhSqsJTkTaV41/bdUJtCaipTIqHG+d9Zzm7CTEgGcmJwTdo48uPbf468eXfTHptRScmkAwUjyuZr2BV17AHnGZ+Gkr11mDugvcdJA36kGMFtfhy/wD1DaFLsqltHUSmUqmDtMzyCqSjddu2s6en88JW6gC0puJiYvbr6Rmwkmer9O+Vtx3PtnlFNzz8oFZmrln2jg2Dal1kXUBmjgMpNs/15SjnJM5Dh/pzvHoMas1Vh3vAPTYwYAXXPvBQCJtn2gIq03PaBWre/LQUk8WPa8CSDJcQFZqrDvANTu/l4MAOHPvaCgETOfyVoCKtNz2tFK1XHaIpnxY9orEiy494CBKbm/KBSq4gpJ4sdbQYkHdx0vAUtVYW5wDU7sGAHDnpe0FAIm2etoCBabm/KBWre/LQQk8WOtrx8bTqFVZlwqk+wnAaB8abbNmbkoLD/tX7KD/qjp/C2zUIpnJpTBIJDOZMQbjemUXInePn4n06tz+J0T2kP6RlvA9E1o8yFmWIHzALfMfluNPcs1xTbMY+P3Z7rXn7cNNs2fSCqFErTnLmSSWPqST6xwbVsyuroSQHuSDcEAAMs8EUg9xPmY0Dwbam1to0l1to2pS7tqf3b5D7PpKwB1DUZN8xZq1SlgGLz8wfRVjWyNX0tV9LW+W7BFdqmIBCF2mBqLIiSOxFSz3XEjMOpOWQvP8A/ZUjqFBlWDPeBvTUO4HWX143saaqFHYK16GyQSJGwuVOCPuCARoPh/x/rv8AL2f5OmzvuJqs86rlanSkUk085ecrygN51fEdTTCnUoIJGLs3DVQFM2kCWxIAX846p2/W2m2kkk85kIf87qZvy3dMhbHfOI+vD/hsTr2l/mu1yDZMzEx9Uje9gbgLGV8RehRTbpOQuQBOXeA8/wBt+Ftu2jaSjMPl6TAabv8A4egg3WHytHTILsLXJVZiRBlONi+IfDkFesSg1J6fMzYEoGpWYHIm9XOUpknKeFbfOt9QqioaZkhVyACSxtMmUic2zaOP4j1h8pyHSTDREsswL2KkHF54MRl4v9LY+Y1P4i1Kdo+ZzOjsp9zqL+kbZq6k9kZugMaD8Za8tcrPh0dkQ999/wBGEZ9/iLZl2c7O+uFeSgqASwqWpZL9RuLT5xh17rWz/iNk+DdWrZ2USFGo46AE1gf9UbDVLd9PeNa+DdlOmmqKiSzhgCrK6ihBJlbhMx1FxeNlAEpni+8+Vo2cXxjJyfKoFpub8oFKt6Cknix1tAkgyXHS8dFFLVWFucA1O7+XgwA4c9L2goBE2zAQLTc35QK1b35aCEnix1teDEgyGPycBS1VhbnAGmxvzgwlw56XgoB4s9bQAtVbHOAam2YMAOHPS8FAPFnraAgWm+eUClW9BCTxY62vBiZ7uOkBSarY5x19uanSdf5H/wC0x2GkOHPS9o49fTDIyniZWF83BAiKR5/45pTdD/5wP3MZjwE8AqbGKdydAuGpzm0/SOt4rpzQOBgo/vL946uhtbo+kisAG+YgJq3dS+mhkBIi4nVIYkZm+Tg7Z1q5e+EbgzW749v2nHDqakpAEAm8zhQMsf6Dz9YwHh/guodRNbaNWp0MwAajOUjNyAFU/wAKKg7x2vGNchDLLvRiclXdlLnvTt/NGtlfentdcjoSoJE9QyYvPDA3mMcjbyjVfBfB9lfato1tHTYNouVYHgL5dkWom5ZZLu8NhyjL7GqbOX1nchAv8JFKA1SIAmx9J55kxfhnbV/uraiSZ9V9fWaYvWzuwRpyuu6uRiCWw+G6uBeRwDcqRlZ8xzB7+UdDxpUOqrsTuqUAnakMruwAy1SovSYlkxx+Cs9c3sxCEru0hgaSwIGWrJI5TEZDbRo1jSJFTXkQaZk7oq+hmkZXvT2mQwPi+yO+yFNNGc6roCRppqBRMuWZNQyoqkLTIz1j68aVi2noK00bUVQoKEBdNFW4lUrVkHMpDF42oy09MAcgAO585YH6CNM8b8U+WdbaalYbNp/L0mUWfUY0rzNy7Xv/APznFOS9tfq+Hnf48+8d2z5236xXhOuVHUaYGkPSSA+sbv8AC/gWzsibU+mrajO2sHMzJQTRLoFVT6mPOvAtmd9YKt2VSoJJkWA4ic3a8bj4Z4rtGzp/c9ZUnpoiBlaasrAqblRcAAEdYzZa3tqm9SOXaPjlldAiLNGV9RryZGYzQX3d0HM8jrP1iU97ln2jxXw/4b/vG3DTSQ0mXTfVqsyKm66kebESBxckTlf2okzkOH7S5xq45JjNMmdvVdrVVbHOAandzBpDhz0vBQJb2esXVQLTfPKBWre/LQQk8WOtrwJM93HTHWApNVsc4Bqd38vBpDhz0vaCgSvxffpAQLTfPKFNV8coLM8WOtorTHDjpeABKb55QoqviCz+rHWDTnu46QCqq2OcA1O7mDS+nPTygspb2euYCBab55Raat78tESf1Y6+cGnPdx0x1gMC2zhq0I4Sy/6G3ll6NL0jDrs4DSdAxE5TNIBkEYz7BGnLAJzKM14vq/K2hNSe460N0kSVb0q+/SOXb9iqWpZTsfPGD1tY+YMZLOnPc+miXeOr9uLS2kFCzMN2YdsKCvE3RefQHpGK8Q1C6I6AMvzDOc1IRm+ZMAqTVKUlIFzK0dTxHUcSRknpuBpsKmBAmKVmokpTecOTcDvLK6GkipSisUpCuhnWOYcg3rnO/PINo0yyzccLNXTF7RsGr/cNTTLo+s6NpqXcSJcc2exaklvKwjn2rZhs2kiaGmOSrIbg5ktIjNzPE7kgXj61NOahAQ6VTs1JWx3qZrcGVjMdBKUdnR0mc02pAUBFwKbCozIFpczjE7xI5fAFVz8xDNXk6kNNSspAr0OZ/wApjveK+HDVFQpDgUzI3XXPy3HNeuVNxzB6Wy7YU1dRGWjSRQC5UqpaSEUsbMpVpALOXyzO5j78U8TVFLPuqpU/LPHrBpgBR1IO6bkrJqRObejyw+3+PujJp6TfMZAdOs83p3nIN2VQVkRmriJBB0/4u1uHZkuugQ2of49dlkqz50ISSf4m6Rl/E9vXZkfa3RE1tQf4SSBoUbqs3NgokFnkylYCWpeEanzUVRNtRqmKyJYFmJZ2PNmsJ+QPnbLyZ29408WEnasl8JbKELapwoMuv/J/WO98O6eptG2hDdCW1dWYnJRmX8JZpD3i7eq7Npqj7pa9OW8hYcybS/2jePgrwQ7Ppl3WWprSZ/5FHAk+gJn1JivFjcsu6eXKSNlADWAlK8WqW76T7wb+X1lASlfi+8+UbWRAtN88oUVb2Iqz+rHWI057uOkBSarY5wqp3fy8Gl9OenlBZS3s9cwEC03zyhTVvfbtBJ/Vjr5wM524emOsBSarY5wDU2zzg0vpz0gsvqz1gFVVsc4V02zB5fTnpBJfVnrASmm+eUKKt7EEn9WOvnAznu46YgLVVbHOFUt3PXvBpfTnp5QWUt7PXPSAxXxBsVWlPJUzxywfzpGH8F8YGmV0NVuKdBOZCUx1lMRtYE5hsS5x53/aN4O393bU0iQ+zsushEuFeI9gpJP+WOHJj7pY7YZTpsrb9t2RXuJTPqDzuOYn/tKMO+zsrTDEEfpYWYCoWAH09WMdLwjxVgfk6pCaigW+h5gENpk4nMWnbrGZ1VJFx9wR95H7Rz6ssb2W6cb5YtdqcuagCAtiyI82pTB02mBUXsRhM3jmfxVlsWCgTsoC+cuMSlP9MRNpRRdnC96hGK2nxLZkMjql3H0aci36zi3rX8PSn66m3vq6mqW06ySysjMWPyypaUgTIlg0mUAqZRx+LeIaWxgam0v87aAv+HpFplQcM2aFt1JlK8pR0vEvHtqYFdm0hs6HOo19QjpUJr2pGbMI73wb8NaFP94eerq1GbOZgMPqAOWwZkkxW5b+V/xaY68Rr+l4TtO26nz9oBAYzVCJW5TX6RLC+XrPtHan2fVdNCQmaD5kqZAjuZ+8elppKDOWLx514Jo/M23SVrz1Qx/0ms/oYpPddVe3T0fwn4a0tMq7z1NVb1uQ1LEXoEgAJxnqpbvpPv8A8wf+XPSAlK/F9+kbZjJNRjtt71JU3zOLTPe9Zdoifzek4Gc7cP2lziULVVbHOFVO7mDy+nPSCSlvZ65gJTTfPKFFW9jp2gk/qx184Gc93HTEBaqrY5wqp3fv3g0vpz08oLKV+LrnpASmm+eUKar45QSf1Y6xWn9OOkAppvnlCiq+ILP6sdYNOe7jpASqq2OfnCundz1itL6c9PKCylvZ65gJKm+eXl+Yi0z3sdO0RJ/Vjr5wac93HTHWAVVWxz844Nr0FYUsAc5xI5BHMGOw0vpz08oLKW9nrmIs32qZdPFdsXVXa9TZ9Q30iFUm9ayDLLz3aY7a/FO0bMZWdbbrZ+qciDMYXM8xlvjXZRp+JbNrMpI1l+WehU0kz86XX/0xg/izYCHUeYcDpu/M/wDZ94rcZfK8rKaXx3pOP8TZiD0oYf8AUAYur8T6Z3U02vykgH2MaAmkZTI6COfQO9w/rFLxY1eZWMz4p4uxYIqKKiBMmcpkDFvPzjvfAfjQavTJNXHci5sGpAG6BNfONN8X1iJECV58+RnHX8M2o6D/ADlJNLb6j+ElkI6mRB7gRW8eOrImZ3fd7a219c2940zwPaQm36NpltSQHRqln7GfpHa2HadTaFB2fTfUBwVU0z8ixkoPcxtHwz8KfLdNfXl8xVkqA1BGppLEyu1NueT5xz48MrV888ZG3SpvmdvKFM971l2/4gv82OsDOduH7dY2MhOq2JesWqW76T7wb+X1lASlfi+8+UBKab55RaKt7EFn9WOsRpz3cdIBVVbHPzhXTu5694rS+nPTygspb2euYCU03zy8otNW99u0RJ/Vjr5wM524emOsAqqtjn5wqptnnFaX056QWX1Z6wCqq2OcK6bZg8vpz0gkvqz1gFNN88oUVb2IiT+rHXzg057uOkAqqtjnCundz17xWl9OenlBZS3s9c9IBTTfPKFFW9iIk/qx184NOe7jpAaf/absvzNjrAIOi6vMZCNuNLsHB/0xoniyMyaeomtNXAYB8gkXE/KTE+hj2PxTY11tHU0ZCToyHsykf1EeMbzbM2m8g+mxWXkVJ3f1XtFatixGppuDIgWmBLlaX6mcfSawBclZE4ngEssh2lV7RwNqeRPn38o+12qRExMeUQu6vjrqQaSDf3BEdLQYuuoJbsiT/mkGH3Qj1jn8RdCCQpBtzzmZPbd945vANBWLWlutIZmSplPp/tAesf2RahGxEH6XIl3AP9I3ume99u0aT/Zjp0aeopxNSPYj+kbqZztw/brFo53yTqtiV4VS3fSff/mK/wDLnpASlfi+/SJQSpvmcKZ73rLtET+b0nAznbh+0ucAqqtjnCundzFeX056QWUt7PWAU03zyhTPex07REn9WOvnAznu46YgFVVsc4VU7v37xWl9OenlBZSvxffpAKab55QpqvjlESf1Y6xWn9OOkAK03zygFqviIoI4sdbwYEndx0tAA1Vsc4V07uYrEHhz0taCkS3s9YARTfPKFNW9+WiICOLHW94EGe7jpjrAA1Vsc4V07uYrSPDnpa0FIlvZ65gBWm+eUeR/GmwHS2zUpBA2gfMXyBvWO9VbH/MI9bUEcWOt7xgPi/wM7TpAp/4mnNkOJ23k9Ze4ERU43VeFayMrES5/n50jgbVM42Xa9jmTKYOCGEiCCbHrnMY/U2Ic1/OUVdNsLqvV6298feR9IzfwwknFv9vM+wMdY7CIyXhWlS4vIHJ/WCK9J+BjvOmJrP1B/wBzG51S3fv3jz/4b2mnWQjmaTy4rfqRHoKkSkeL79ItFKEU3zO0KZ73rLt/xEW3FjreBBnMcP262iUANVsShVLd9J94rX4fWVoAiUjxfefK8AppvnlALVvYiKCOLHW8GBnu46QANVbHOFVO7+XitI8OelrQUiW9nrmAEU3zyhTVvfbtEUEcWOt7wYGduH7dYAGqtjnCqm2ecVpHhz0tBSBxZ63gAeq2OcC9NswYg8OeloKQLNnreAU03zygFq3oiAjix1veBBJmuPaABqrY5wLU7v5eKxB4c9LWgpAEmz+SgBFN88oBat6IgI4sdb3gQSZriABqrY5wLU7v5eKxB4c9LWgpAEmz+SgNV+KfhmuetpCbnjXFf8w/m/X9fPto2UqTMFSMgiR9jHtSgjix1vHU8R8N09cS1EDLyOCPORFxEaTK8YoByBBJAylHoO3fAiNfQ1mU/wALqGHuJEfeNc274N2tMIup/kYT9mkfaI0nZsOpKRGf0j0rwvaRraavO+GHUfvn1jynR0NbSMtXRdP8yMB7kSjZPBvEn02mOE5BsCImFb5Oq2JXhVLd9J94xun4oX4NO/Qn9hHaTTZv/EN/4R58qjz7RKrskU3F5wpnvesu0RbcX3vAgzmOH7S52gAaq2OcC9O7FYg8OeloKQBJs9bwAim+eUAtW9+WiICOLHW94EEma4gAaq2OcC1O7+XisQeHPS1oKQBI5/JXgBFN88oAVXxyiKCOLHW8Vpnhx0tAClNx2gEquYigi7Y94MCTNce0AVqrG3OBendisQeHPtAEASbPvACtNxflALVvfloigjix73gQSZriABqrG3OBendisQeHPtAEASbPvACtNxflALVvfloigjix73isCTMYgIGqsbc4Fpbv5eKxB4c+0FIAkc/krwAim4vygFq3vy0FEuL94jAkzGPydoCq1Vsc7RGMt2Ux16xWM+HPtBSAJHP5K8AIpuO0As9719oKJcX7xCCTMcP5O0ABqsbShVLd9PeKxnw/tAESkeL+vK8AK03HaAWreiKCLtj3gQSZrj2gAaqxtzgWp3fy8ViDw59rQUgCTZgBWm4vygFq3vy0FBHFj3iMCTMY/J2gAaqxtzhOmwvzisZ8OfaCsBZs+8B9a+PWGhwwhAcez59Ia3F7QhAfe0Y9f3i6PD7whAfGz59Imtxe0IQH3tGPX94ulw+8IQHxs+fSJqcftCEB97Tgd4ulw+/9YQgOPZ8ntDU4vaEID72nA7xU4PQ/1hCA+dnyY+W4/Uf0hCA5NfHrDQ4feEIDj2bPp+0Nbi9oQgPvaMesXS4feEIDj2fJ7Q18+kWEB//Z',
          id: 1
        },
        {
          price: 84998,
          title: "I-Phone 12",
          qty: 10,
          img: 'https://images.livemint.com/img/2020/06/17/1600x900/TA_-_2019-08-07T202445.701_1565189709117_1592404421982.png',
          id: 2
        },
        {
          price: 4998,
          title: "laptop",
          qty: 1,
          img: 'https://lh3.googleusercontent.com/proxy/diNaM2GNsbLyCtVXe5PjUez3Zp2TB3DFTON2ed8oJ-4QJK3PhS_R0q12M4BstOFKcyE882Opd2tyz9lgzUAonOSF6Kslo8xpBtXYO-60G7lhD7TkRt1H6ytgUH9YS4z7wm5J8NQ',
          id: 3
        },
        {
          price: 49980,
          title: "ipad",
          qty: 4,
          img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQExEQDhAQEBAQEBEQDw4QEBAOEBAOFhgXFxYSFhYZHishGRsmHBYWIjMiMystMDAwGCA1OjUvOSovMC0BCgoKDw4PGxERGC8eHh4tLzAtLS0vLy8vMS8vLy8vLy8vLy8vLy8vLzEvLS8tLy0tLy8vLy8vLS8tLy8vLy0yL//AABEIAN4A4wMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABQMEAgYHAf/EAFEQAAEDAQMCEAkJBQcFAQAAAAEAAgMEBREhEjEGBxMiMkFRVGFxcnORs9HSIzM0UnSBscHDFBUWJFOSk5SyYoKh4fAlQkNkosLiNUR1g9MX/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAEDBAUCBv/EADgRAAIBAgIHBQYFBAMAAAAAAAABAgMRBDIFEiExQVGBYaHB0fATIkJxkbEGgsLh8RQzcrIVIyT/2gAMAwEAAhEDEQA/AO4oQltuWpHSROmfebiGsY3ZPkODWD+sACdpADJC5rPootCQ5QligG1HHG2S4bhc++88Nw4lC7RDaF3lZHDqMHcTsB1BC5/YU9p1LiflrxG04u1CmxO4PBramU9QBcapxO7qUXuakA2QkdXqsYLnVbgAL8Ioe6o6SOreMp9S5gOLWmOEm7huauZSSOoxbNgQlJim3y78OPsVKaSpymxxVDnSOBJJZEGMYM73a3dIAG30kJT7Dr2fau/yNjQlsFPMBr6mR52yI4WD1DJ96l1N/wBrJ0Rd1dkZdQqeQ/7R/RH3V7kP+0f0R91AFtCq5L/Pf0M7F5c/z3dDOxAFtCq3P+0d0M7EXP8AtHdDOxAFpCqZL/tHdDOxGQ/7R/RH3UAW0KnkP+0f0Rd1eak/7aT7sXcQBdQqOpSfby/dh7i81GTfE33YP/mgC+hUBBJ9vKeAtgu/gxWI3kXB5BOYOuuv/mgCdCEIAEIQgAWj6ZE2voo9pzp5P3mNY0dYVvC0LTJb4ahO42qB9eopoDmejD5YXxfJzMI7jlGDKytUvF2Vk45N3qz37SeU7pNSj1W7VdTbql13jLsc2GdWCVFOcExHQ9BrQKaO7bxPGtD0APt75xk+X/KdQOq/KhMHimabjqfye/W7LJ2P92+9b7oRF1NGP2WnpAPvThIBRbkmMbdp0rAeK+/3JJpputD5I35s1YO1ZonNOCZxT5Lthk67ZZF+Tj6r04tlt7o7tp+V6mgk+xNyoZO0/oWIK8PqazoDfW/IYjaOqave+4yi6cw36zVBnyrt3G66/G9O7HF7537d8bP3QCfa4qeozKKxf8Xlj2Ig7yFNWjYZIVOS1qZpLXVEDXNJDmukYC1wzgi/ArH56pN80/4zO1S6yIbF5CXG3qPfdN+NF2o+f6LfdN+Yi7UXCzGKEu+kFFvum/Hi7V4dEFFvym/MRdqLoLPkMlSq6idssDIoBLDIZBUT6q2M04a29hDCL5Mp2GGZQ/SOg37S/mIe1efSOh37SfmYe8i4ar5DRCVnRNQb9o/zMPeXn0ms/f1H+Zg7yLoeq+Q1QlX0ms/f1H+Zg7y8+k9n7+o/zMHeRdC1XyGyEp+k9n7+o/zMHeXv0ns/f1H+Zg7yLhqvkNVVtR+TDK4Z2MLxxt1w/iFT+k9n7+o/zMHeVi0JGyU0r43Nex8DnMe0hzXMc28OBGBBBzphZobIQhIAQhCABaHplO8LRDbLan4K3xaHplN8LRHcbU/BTQGqEqKc4LIlRTnBMR0nQm4Gmju2msHryGpvek+hQXU8fCxh/wBDU2SAT2s4Bzb/ANsevIcnBKUWqL3Nv/bP+hybOKgnmLNLL1ZFUZljYuaTlj2L2ozLyxcz+X7kU94VcprlSfCTc9P1jlgSsqrxk3PT9Y5RSZjxFeCxaX9RU2fHL/Zm7Q/tx+S+wnmOKruKsTZ1XcupRV3sNiEnbeY3lBxwKEAE4AEk4ADEk7iaiuRJrPmU54TtEkKnJGd09K2SaznDK18bnMF8kbXZTmAZ9q5123cTcqEkAOcXbe5huqy04Zl69eR1TxF9zuInxHdPSq0kZ3T0rZqixJWljbr3SNymtab3AY7If3c153Nu5L6+hMTix2STktfeCHNIc0OBBGfBwVlXjvRLDEqWWV/VvuIJIzunpUD2ndPSU1liVSSNTQmWY1Jcygb913SVLBWSMBDXvAJDiA64FwvAJw4SsnMUZYp1I7ctbY9pfg0QVLA9jZHASgNkGtOXHrhccL8xd0rtVkD+zaf/AMdB1LVwQMxHGF32xR/Z1MP8hT9S1aWBldy9cTyv4lhGMabikruV/pE2RCEK+eVBCEIAFoGma8iWhG62qv8AVqC39c+0z/HUHIq/gJoDVCVFOcFkSopzgmI6XoScTTRE+a0eoNA9yb3pNoR8li4gm6QCe2HkOju235J4nAg/wKbuKTW1s4udb703cq9TMW6OXqyOoOCzsXYv5SiqDgpbF2LuUilmFWymtVXjJefn6xyiIU1SPCTc9P1jlGQvAYx/+ip/nL/Zm3Q/tx+S+wnnGKquTCtZcSqDwpm9t+ZrU3dEZUtJKWPY5t2U17XNBzZQIIv4FEVLT0+Xfc5rSCMHkNBB271LTUtZau8km1bbuGlHHEySQjVQ5sc2VHI1oEQyHNIc4HXYnJGAvJHEa9GNcHTSMvZGHRB7jI0n+603A3AYnJ4ANtEjZnsyXVDXNF1zDMXDguB3P4KuyiJF+WwYa4OdklpvuzK63JW1YbE27bEuHDbusvJLYVU4tO89+zi+fm/NvaWrUZdHCTIyQkPvILyXEyPJdiBf2qrbcQc8buoU2P8A6Y1kaM5jLHrRrRql4AJ2toZ71g+G/KypGktA/vZV4AFwB4sPUo5xm/htfV48k1xZJTnFfFffw5u/IRVEVyoSsTyqjvF+57EtlYlTmaEJCt7FEWq9IxQuYrUZEyZVa3EcYXeLEH9n0voNP1TVw1rcRxhd0sAfUKT0Km6pq1dHPbLoeb/ErvGl+b9JsCEIWoeVBCEIAFz3TR8dQcir+AuhLnmmj46g5FX8BNAagSopzgsiVHOcExHTdCPksXJHsTa9KNCXksXJHsTa9IBNbOzi51qcPKTWxs4udb703ecVWq5i3Ry9WR1BwU1i7B3KKgqDgp7E2DuUUUswVsokkjvdLz0/WPUD40xa0Eyc7PxeNeopI15XSejKlOUqu+Lbezhdt7fra+75FzC4pNKPFISV0WF/qSp4Wyzw3gjdSKqiLSQs6m7xtyNrD1b7Ci4LFSPCiKkRfTBCFinY7M0LxCBHqW1EdxuTJQ1EeUMM49i7hKzOouzFL2KFzFde1RFqtKROmVBHiOMLtmh/yGk9Cp+qYuOBmI4wuyWD5DSeh0/VNWzop3c+nied/ET92l+b9I+QhC2Dy4IQhAAud6anjqDkVfwF0Rc701fHUHIrPgJoDSyVHOcF6SopzgmI6joT8li5I9ibXpRoUP1WLkj2JpekAptfZxc433ps84pRa2zi5xvvTWQ4qtVzFyjl6sjnOCtWHsDyiqc5wVuwtg7lFFLMFfL1KDc8nPT9a9ZELFueTnp+teslO0mrPiVCCSP+uFK7QprxeM49idkKvJGvGaRwMsLU1or3Xu8n4Piu25sYTFX+aNQlbcq7gm9pUuSTuZxxJa9ip8dh6GlU1ldEBWKzIXly6LCZgvb0LxMZnei9YoQFjCSEO4Cq7qY7StrxdKTQ02im2nN4w211mw/Iqb0On6tq5o0rpli+RU3olP1bVu6Fld1OniYP4gd40/zfpHiEIW8eaBCEIAFzrTW8dQcis+AuirnOmv42g5FX8BNAaMSo5jgvSVHMcExHVNCvksPJb7E0BSrQt5JDyW+xM70gFVqnXxc41NpDilFqHXxc433ppKcVWq5i7Qy9WYTnBW7A2DuWVQnOCu6H9g7llKlmFXydSm3PJz0/WvWSxbnk56frXrJWSoCCELxczhGcXGSunwY02ndC61o25Ic4gXG684DFI5Ib8RiN0YrYrWjyopB+wXetuu9y0jKIOBI4jcvP4rRdOD9x2XJ7fXW77T0+inKrSe3an68S4+FQujQyqdtm/jxUrahp2QyeHOFlTws49pp2mu0ruasCrkkW2MRuqB7FBtW87jNMhXl6yIXhTJAvXl6F4mM9aun2L5FTeiU/VtXLxnC6hY3kVN6JT9W1bug81Tp4nn9P5af5vAeIQhb55wEIQgAXONNnxtByav4C6Oub6bXjaDk1fwE0BoJKjmOCHHFRzHBMR1nQufqkPJb7AmV6WaGPJIeQ32BMb0gFlp7OLnG+9NZjilFo7OLnB700mOKrVcxdoZepDOcFf0O7B3LS+c4Jhoc2D+WlRzBiMvUqNzyc9P1r1ksW55Oen616yVkpghCEARTsymub5zSOkXLn0pxK6KVpWiCgdG9xA1jiXA7WOJb6lXxELq56DQNaKnOm/i2rpe/c+4XByyDlBesg5ZNSkencS1DOW5sRttOZWhkvF7fWNsJcHLNr7sQbjuhUqtBSIJ077VvLL4lCWKdlUDg8fvDsWdzDmcOm4/xVGVGceBHdx3oplqMhXdQXmQ0Z3DpvXCUnwD2hWZGuk2R5FT+hwdW1c+ErRsRfwnALoNkn6lT+hwdW1b2hYOLqX5LxMPTjbjTvzfgPUIQt48+CEIQALm2m542g5NX8BdJXNdN7xlByav4CaA5444qOY4IccVHKcExHXtDB+qQ8hvsCYXpZoZP1SDkM9gTC9IBdaHjIucHvTOU4pVXnwkfLHvTOU4qrWzF7D5OpFOcFf0NbB/LS6Y4JhoZ2EnL9yKOYWIy9SBueTnp+tesli3PJz0/WvWSslMEIQgDxRVEDZGkPaHNOcH+s6mXiBptO63mmW1Yror3svczd2xwO7UmvuXSnNBvBF4OBBxBG4tSt+xci+SIXs2xnLT2KtUo8j1Wi9Le0tSrPbwfPsfb9/nvRhyzDlAcF6HrPqUTecSwCswVXD1mHKtKBw0TAr0FRArIFRuDObErCukWV5DT+hQ9U1c0YcV0izPIIPQYeqatDRkbSn08Tz2n1aNP5vwNhQhC1jzgIQhAAuaacHjKDk1fwF0tcy04z4Sg5NX8BNAc3ccVHKcF644qOU4JiOwaGj9Vg5tnsCv3pdobP1WDm2ewK/ekAvrj4SPlj3pnIcUqrT4SPlj3plIcVVrZi9h8nUinOCZaFzrJOc9yVzHBMtCuwk5z3Io5hYnJ1I255Oen616yWLc8nPT9a9ZKyUwQhL7RteKG8HXO81pzco7STaW8kpUp1JasFdjBC0qu0QSuvOVqbP2L24cedaxaFtvdeGueP2iSXHsSi3J+6jYp6DqNe/NR+Sv4pd7XadSqq+KPBztd5rcT/ACSye2wbwGAg4HKxvHCFy9toyjHVHD94q/S6IHtwkAcN3YuV6nGksyfr5E//AA0Ycdd/Tu/cYW4XRnLYwFhOYE3tO5xcKX09oMdhsTuHb4inVNWxTAgEG8a5js93CEurrADr3QkA+YcOgrivgYyWtT3dnru3mzhsbFf9dXY1xfj57mZByza9L4GTRHJma4t2n3EhvrGcJkyE7W2smrQ1XZo0Nj3be8yDlkHKWCzZn5o3nhDTd0plT6HJnZ8lvKd3b1D/AE7e5FSriqFPPNLqr/TeLGHELpVnf9Pg9Bh6pq1eHQz50nqa33kraaVmTQRjzaKMdEQVnDUXC9+J5rTOMo11BU5Xte+xrfbmlyNhQhCtGGCEIQALmOnKfCUHJq/gLpy5fp0HX0HJq/gJoDmbjio5TghxWEhwTEdi0Nn6rBzbPYFfvS3Q4fqsHNs/SFevSApVp8JHyx70xkOKV1h8JHy+1MZCqtbMXsPk6kcxwTTQpsJecHsSiY4JtoSOsl5wexFHN0DE5Opi3PJz0/WvWSxbnk56frXqtatXqUbnjZbFvKPZifUrDdipCDnJRjvewWW9bJZfHEbnZnOGdv7I4eHa9mp1E4aC557SVnUS3XuccBiSVqlqWiZHcAzDcC5pU3Vlt3HsaNKnhKerHfxfPt8v5JK+0TIdwbQ3EvMirOlXgetKNNRVkQyxV2WctZB6rhyzBSaO4VrlqKUtILSQRmIwKf2dbuZsv3h7wtaaVm0pRbg7osNRqK0kdChmDgHNIIOYg3hNbMtAs1r8WnpHCODgXNaOtfEb2uI3RnB4wtmsu1mS3NdrX7m07i7FYVSNVas168ClicB7rutaPejorCCAQbwcQd0LJILItDJOQ86wnA+ad3iWwLPrUnTlZ9DzVai6UrcOABTM8hb6E3qgoQph5APQm9UFEQmwIQhAAhCEAC5dp0nX0HJq/gLqK5Zp2nXUHFV/ATQHL3FYSHBDisJDgmI7FoeP1aDm2fpCu3pfoeP1aDmmfpCu3pAU6s+Ej5XamDzillUfCR8rtTF5VWtmL2HydSOY4JxoR2E3OD9ISabMnGhDYTc4P0hFHMLE5OoMzyc9P1r1rWiupvc2MZmi88o/yu6VtTqWYF90TnAyyuDg6K4tc9zhncDmK1i1NDNdKZHsYwOcXFuVI0AX5s1+YexTTTasiXRk6UKvtKkraq2fP+LnO9ENo/4bTgNlwu3PUtZklW81GlfaryTdT+uo/wCKrnSntXcpvzB7q0qPs4RSv9/InxGPU5Npmlh6za5bkNKe1Nym/MHurMaVNqebT/mP+K79rDn9/IhjiIriac1ykaVuA0rLU82n/H/4qZulpaYaG5FLg5zsrVdecoNFxN2YZN4G0XO3VxKpDmWYYymvi9fQ01pWbStuGlhaXmwfjfyWY0srR82H8b+Sjc48y1DH0V8a7/I1JpUzHXZltY0s7R3Ifxm9iyGlraG5F+M3sXDlHmXaek8Ot80YWHamWMhx1wzHzh2re7FqstmSdkzDjbtdi06n0vLQYQ5oiBBvB1ZufoW2WXYtXE4OdEM1zg2Vhz7l53VI6kZ03GT2rd69dxl6SnhqkX7Oa59f3GoUv/YD0JvVBYCCb7B/34e+p6iF0dEY37JlJkOAN4ymx3HHjCpmCPUIQgAQhCABcr079lQcVX8BdUXPtOaypJaRk8LS91JLqr2tF7tQc0teQOA5LjwApoDjBWEmZRtqGuxBFxXj5QmI7JodP1aDmo/0hX1qugq24308bC4ZUbRG4bYLcB0i4rZPlDd0dKQFSr2bOV2pi5JbVnAucMS0gq5R2nHI0EOHCFVrZi7hn7tu0tzZk40HbCbnB+kJDJUNuzjpTfQfVs8LHeMokPAvztzXj+tsJUX7w8QvcNnQhCtlEEIQgAQhCABVoKh0gy2MGQRfG5z7i8bTrgDc0jEY38AVlQvkLAA2N7rhcAzIuuHGRcgCSKTKF9xGcEEXEEG4jpCyXgXqABCEIAEIQgAVK2vET8zJ+kq6qVonKAhGL5SAW+bDeNUedwXXjjICAGqEISGCEIQAIQhAGmWxpY2VUuMjqcwvN5d8neYGuJxJLRrb+G5L/wD8csr/ADP457F0NCANApdKWzYXZcTqtjt0VBx4CCLimg0B0321T+JH3FtaEAam/QBSnPLU/iR9xQN0t6IG8SVQ4pWD/atzQk0nvGm1tRqI0vqT7Wq/Fb3VlDoDpmOD2S1TXNN7XNlaHA8BDVtiEtSPI69pLmxSLGIF3yuq+/EP9iyFkO31Vffi7iaIXRwLBZTt9VP3ou4shZjt81H3ou4mKEAL/m52+ajpi7i9+b3b5qOmHuK+hAFD5vdvifpi7iPm92+J+mLuK+hAFD5vdvmo6Ye4vPm12+J+mLuJghAC42Y7fNR96LuLw2U7fVT96LuJkhACv5oO+qr78fcQbHO+qr8SPuJohACr5nO+qv8AEYPY1WqKiZECGXkk3ue7XPcdrKdnKtoQAIQhAAhCEAf/2Q==',
          id: 4
        }
      ]
    }
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({ products })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);


    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;



    this.setState({ products })
  }

  handleDeleteItems = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;
     
    let count = 0;
  
    products.forEach((product) => {
      count += product.qty;
    })
    
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;

    let total = 0;
    
    products.map((product) => {
      if(product.qty > 0){
      total = total + (product.price * product.qty);
      }
      return '';
    })
    
    return total;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
          products = {products}
         onIncreaseQuantity  = {this.handleIncreaseQuantity}
         onDecreaseQuantity = {this.handleDecreaseQuantity}
         onDeleteItems = {this.handleDeleteItems} 
        />
        <div>TOTAL : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
