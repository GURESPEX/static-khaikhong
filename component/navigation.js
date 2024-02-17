let navigation = `
<nav>
    <div class="wrapper">
        <a class="logoBox" href="index.html">
            <img class="logo2Text" src="img/logo_image/logo2_text.svg" width="96">
            <img class="logo2" src="img/logo_image/logo2.svg" width="196">
        </a>
        <a href="register.html" class="textBtnH">สมัครสมาชิก</a>
        <a href="login.html" class="textBtnH">เข้าสู่ระบบ</a>
        <a href="login.html" class="textBtnH" onclick="localStorage.clear()">ออกจากระบบ</a>
        <label for="showUser" class="userOnline">
            <p id="userCredit">0.00฿</p>
            <hr class="hrV">
            <p id="userName">
                Unknown
                <img src="" width="24" height="24">
            </p>
            <input type="checkbox" id="showUser" hidden>
            <div class="userMinInfo">
                <div class="profileBox">
                    <a href="profile.html" class="minImage">
                        <div class="minInfo">
                            <p id="minCredit">0.00฿</p>
                            <p id="minName">Unknown</p>
                        </div>
                        <img src="" width="64" height="64">
                    </a>
                    <hr class="hrH">
                    <a href="profile.html" class="textBtn"><i class="ri-profile-line"></i>ข้อมูลส่วนตัว</a>
                    <a href="topup.html" class="textBtn"><i class="ri-hand-coin-line"></i>เติมเครดิต</a>
                    <hr class="hrH">
                    <a href="cart.html" class="textBtn"><i class="ri-shopping-cart-2-line"></i>รถเข็น<p
                            class="valueAmount">0</p></a>
                    <a href="favorite.html" class="textBtn"><i class="ri-heart-line"></i>สินค้าที่ถูกใจ<p
                            class="valueAmount">0</p></a></a>
                    <a href="chat.html" class="textBtn"><i class="ri-message-2-line"></i>แชท<p class="valueAmount">0
                        </p></a>
                    <a href="orderList" class="textBtn"><i class="ri-file-list-3-line"></i>รายการสั่งซื้อ</a>
                    <a href="login.html" class="logoutBtn" onclick="localStorage.clear()">ออกจากระบบ</a>
                </div>
            </div>
        </label>
    </div>
</nav>
<nav>
    <div class="wrapper">
        <form class="searchForm" action="product.html"
            onsubmit="this.childNodes[1].value === '' ? localStorage.setItem('productTitle','สินค้าทั้งหมด') : localStorage.setItem('productTitle',this.childNodes[1].value)">
            <input type="text" placeholder="ค้นหาชื่อสินค้า">
            <i class="ri-search-line"></i>
            <button class="searchBtn" type="submit"><i class="ri-search-line"></i></button>
        </form>
        <label for="showSideMenu" class="menuBtn"><i class="ri-menu-fill"></i></label>
    </div>
</nav>
<nav>
    <div class="wrapper">
        <ul class="navShowMenu">
            <li><a href="index.html" class="textBtnH"><i class="ri-home-6-fill"></i>หน้าแรก</a>
            </li>
            <li>
                <a href="product.html" class="textBtnH next"
                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)"><i
                        class="ri-layout-masonry-fill"></i>สินค้าทั้งหมด</a>
                <ul>
                    <li>
                        <a href="product.html" class="listBtn next"
                            onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องใช้ไฟฟ้าขนาดใหญ่</a>
                        <ul>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">ทีวี</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">แอร์</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">ตู้เย็น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องซักผ้าและเครื่องอบผ้า</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องกรองน้ำ</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="product.html" class="listBtn next"
                            onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องใช้ไฟฟ้าขนาดเล็ก</a>
                        <ul>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องฟอกอากาศ</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เตารีด</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เตาไฟฟ้า</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">หม้อหุงข้าว</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องปิ้งขนมปัง</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">พัดลม</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="product.html" class="listBtn next"
                            onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องใช้ไฟฟ้าภายในบ้าน</a>
                        <ul>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องทำน้ำอุ่น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">หุ่นยนต์ดูดฝุ่น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องดูดฝุ่น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">อุปกรณ์เสริมเครื่องดูดฝุ่น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เตาไมโครเวฟ</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="product.html" class="listBtn next"
                            onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องใช้ไฟฟ้าส่วนบุคคล</a>
                        <ul>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">ไดร์เป่าผม</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">อุปกรณ์กำจัดขน</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">อุปกรณ์ตัดแต่งหนวดและเส้นผม</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">แปรงสีฟันไฟฟ้า</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="shop.html" class="textBtnH next"><i class="ri-store-2-fill"></i>ร้านค้า</a>
                <ul>
                    <li><a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Samsung Official Store
                            <p class="shopAmount">0</p>
                        </a>
                    </li>
                    <li><a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Xiaomi Official Store
                            <p class="shopAmount">0</p>
                        </a></li>
                    <li><a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Toshiba Official Store
                            <p class="shopAmount">0</p>
                        </a></li>
                    <li><a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            LG Official Store
                            <p class="shopAmount">0</p>
                        </a></li>
                    <li><a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Sony Official Store
                            <p class="shopAmount">0</p>
                        </a></li>
                    <li><a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Daikin Official Store
                            <p class="shopAmount">0</p>
                        </a></li>
                    <li><a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Philips Official Store
                            <p class="shopAmount">0</p>
                        </a></li>
                    <li><a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            ร้านนายชำระ
                            <p class="shopAmount">0</p>
                        </a></li>
                </ul>
            </li>
            <li>
                <hr class="hrV">
            </li>
            <li>
                <a href="terms.html" class="textBtnH" onclick="localStorage.setItem('productTitle',this.innerHTML)">เงื่อนไขการใช้บริการ</a>
            </li>
            <li>
                <a href="about.html" class="textBtnH" onclick="localStorage.setItem('productTitle',this.innerHTML)">เกี่ยวกับเรา</a>
            </li>
        </ul>
    </div>
</nav>

<input type="checkbox" id="showSideMenu" hidden>
<div class="sideMenu">
    <div class="closeBox">
        <form class="searchForm" action="product.html"
            onsubmit="localStorage.setItem('productTitle',this.childNodes[1].value)">
            <input type="text" placeholder="ค้นหาชื่อสินค้า">
            <i class="ri-search-line"></i>
            <button class="searchBtn" type="submit"><i class="ri-search-line"></i></button>
        </form>
        <label for="showSideMenu" class="menuBtn"><i class="ri-close-fill"></i></label>
    </div>
    <div class="profileBox">
        <a href="profile.html" class="minImage">
            <div class="minInfo">
                <p id="menuCredit">0.00฿</p>
                <p id="menuName">Unknown</p>
            </div>
            <img src="" width="64" height="64">
        </a>
        <hr class="hrH">
        <ul class="navSideMenu">
            <li><a href="index.html" class="textBtnB"><i class="ri-home-6-line"></i>หน้าแรก</a>
            </li>
            <li>
                <a href="product.html" class="textBtnB next"
                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)"><i
                        class="ri-layout-masonry-line"></i>สินค้าทั้งหมด</a>
                <ul>
                    <li>
                        <a href="product.html" class="listBtn next"
                            onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องใช้ไฟฟ้าขนาดใหญ่</a>
                        <ul>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">ทีวี</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">แอร์</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">ตู้เย็น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องซักผ้าและเครื่องอบผ้า</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องกรองน้ำ</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="product.html" class="listBtn next"
                            onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องใช้ไฟฟ้าขนาดเล็ก</a>
                        <ul>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องฟอกอากาศ</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เตารีด</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เตาไฟฟ้า</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">หม้อหุงข้าว</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องปิ้งขนมปัง</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">พัดลม</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="product.html" class="listBtn next"
                            onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องใช้ไฟฟ้าภายในบ้าน</a>
                        <ul>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องทำน้ำอุ่น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">หุ่นยนต์ดูดฝุ่น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องดูดฝุ่น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">อุปกรณ์เสริมเครื่องดูดฝุ่น</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เตาไมโครเวฟ</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="product.html" class="listBtn next"
                            onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">เครื่องใช้ไฟฟ้าส่วนบุคคล</a>
                        <ul>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">ไดร์เป่าผม</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">อุปกรณ์กำจัดขน</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">อุปกรณ์ตัดแต่งหนวดและเส้นผม</a>
                            </li>
                            <li><a href="product.html" class="listBtn"
                                    onclick="localStorage.setItem('productTitle',this.childNodes[this.childNodes.length-1].textContent)">แปรงสีฟันไฟฟ้า</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="shop.html" class="textBtnB next"><i class="ri-store-2-line"></i>ร้านค้า</a>
                <ul>
                    <li>
                        <a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Samsung Official Store
                            <p class="shopAmount">0</p>
                        </a>
                    </li>
                    <li>
                        <a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Xiaomi Official Store
                            <p class="shopAmount">0</p>
                        </a>
                    </li>
                    <li>
                        <a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Toshiba Official Store
                            <p class="shopAmount">0</p>
                        </a>
                    </li>
                    <li>
                        <a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            LG Official Store
                            <p class="shopAmount">0</p>
                        </a>
                    </li>
                    <li>
                        <a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Sony Official Store
                            <p class="shopAmount">0</p>
                        </a>
                    </li>
                    <li>
                        <a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Daikin Official Store
                            <p class="shopAmount">0</p>
                        </a>
                    </li>
                    <li>
                        <a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            Philips Official Store
                            <p class="shopAmount">0</p>
                        </a>
                    </li>
                    <li>
                        <a href="shopInfo.html" class="listBtn" id="shopMenu"
                            onclick="localStorage.setItem('shopTitle',this.childNodes[0].textContent.trim())">
                            ร้านนายชำระ
                            <p class="shopAmount">0</p>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="terms.html" class="textBtnB" onclick="localStorage.setItem('productTitle',this.innerHTML)">เงื่อนไขการใช้บริการ</a>
            </li>
            <li>
                <a href="about.html" class="textBtnB" onclick="localStorage.setItem('productTitle',this.innerHTML)">เกี่ยวกับเรา</a>
            </li>
        </ul>
        <hr class="hrH">
        <a href="profile.html" class="textBtn"><i class="ri-profile-line"></i>ข้อมูลส่วนตัว</a>
        <a href="topup.html" class="textBtn"><i class="ri-hand-coin-line"></i>เติมเครดิต</a>
        <hr class="hrH">
        <a href="cart.html" class="textBtn"><i class="ri-shopping-cart-2-line"></i>รถเข็น<p class="valueAmount">
                0</p></a>
        <a href="favorite.html" class="textBtn"><i class="ri-heart-line"></i>สินค้าที่ถูกใจ<p class="valueAmount">0</p>
        </a></a>
        <a href="chat.html" class="textBtn"><i class="ri-message-2-line"></i>แชท<p class="valueAmount">0
            </p></a>
        <a href="orderList.html" class="textBtn"><i class="ri-file-list-3-line"></i>รายการสั่งซื้อ</a>
        <a href="login.html" class="logoutBtn" onclick="localStorage.clear()">ออกจากระบบ</a>
    </div>
</div>
`;

// Navigation Component
document.querySelector(".container").innerHTML += navigation;