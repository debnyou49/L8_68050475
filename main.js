

    // 1. รอให้หน้าจอโหลดเสร็จก่อน
    document.addEventListener('DOMContentLoaded', function() {
        
        // 2. อ้างอิงไปที่ปุ่มส่ง
        const submitBtn = document.getElementById('btnSubmit');
        
        // 3. เมื่อมีการคลิกปุ่ม
        submitBtn.addEventListener('click', function() {
            // แสดงหน้าต่างแจ้งเตือน
            alert('ส่งข้อมูลสำเร็จ! ทีมงานจะติดต่อกลับไปโดยเร็วที่สุด');

            // สั่งปิด Modal (อ้างอิงตาม id "myModal" ที่ตั้งไว้ในตัวอย่างก่อนหน้า)
            const myModalEl = document.getElementById('myModal');
            const modal = bootstrap.Modal.getInstance(myModalEl);
            if (modal) {
                modal.hide();
            }

            // ล้างข้อมูลในฟอร์ม (Optional)
            document.getElementById('nameInput').value = '';
            document.getElementById('detailInput').value = '';
        });
    });