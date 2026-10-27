import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

def set_cell_background(cell, fill_color):
    tcPr = cell._element.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_color}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._element.get_or_add_tcPr()
    tcMar = parse_xml(f'''
        <w:tcMar {nsdecls("w")}>
            <w:top w:w="{top}" w:type="dxa"/>
            <w:bottom w:w="{bottom}" w:type="dxa"/>
            <w:left w:w="{left}" w:type="dxa"/>
            <w:right w:w="{right}" w:type="dxa"/>
        </w:tcMar>
    ''')
    tcPr.append(tcMar)

def set_table_borders(table, color="CBD5E1", sz="4", val="single"):
    tblPr = table._element.xpath('w:tblPr')
    if tblPr:
        borders = parse_xml(f'''
            <w:tblBorders {nsdecls("w")}>
                <w:top w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
                <w:bottom w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
                <w:left w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
                <w:right w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
                <w:insideH w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
                <w:insideV w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>
            </w:tblBorders>
        ''')
        tblPr[0].append(borders)

doc = docx.Document()

# Page Setup: Margins 2cm
sections = doc.sections
for section in sections:
    section.top_margin = Inches(0.8)
    section.bottom_margin = Inches(0.8)
    section.left_margin = Inches(0.8)
    section.right_margin = Inches(0.8)

# Set base style font
normal_style = doc.styles['Normal']
font = normal_style.font
font.name = 'Segoe UI'
font.size = Pt(10)
font.color.rgb = RGBColor(0x1E, 0x29, 0x3B)

# DOCUMENT HEADER
p_head = doc.add_paragraph()
p_head.alignment = WD_ALIGN_PARAGRAPH.LEFT
run_title = p_head.add_run("HỌC VIỆN AIxB (AIxB ACADEMY)\n")
run_title.font.size = Pt(20)
run_title.font.bold = True
run_title.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)

run_sub = p_head.add_run("SITEMAP CHI TIẾT WEBSITE AIxB (BLUEPRINT v3.1)\n")
run_sub.font.size = Pt(13)
run_sub.font.bold = True
run_sub.font.color.rgb = RGBColor(0x00, 0x52, 0xCC)

run_tagline = p_head.add_run("Tài liệu định hướng kiến trúc thông tin theo Mô hình Kim Tự Tháp 3 Tầng & Chuẩn SEO Silo\n")
run_tagline.font.size = Pt(9.5)
run_tagline.font.italic = True
run_tagline.font.color.rgb = RGBColor(0x64, 0x74, 0x8B)

doc.add_paragraph() # Spacer

# SECTION 1: ARCHITECTURE MAP
h1 = doc.add_heading(level=1)
r_h1 = h1.add_run("1. SƠ ĐỒ KIẾN TRÚC KIM TỰ THÁP (WEBSITE ARCHITECTURE MAP)")
r_h1.font.size = Pt(13)
r_h1.font.bold = True
r_h1.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)

p_intro = doc.add_paragraph()
p_intro.add_run("Cấu trúc website AIxB được thiết kế theo mô hình Kim tự tháp 3 tầng nhằm tối ưu hóa hành trình trải nghiệm người dùng (User Journey) và nâng cao hiệu quả SEO cấu trúc (Silo Architecture).")

# Pyramid Visual Table
table_pyr = doc.add_table(rows=4, cols=1)
table_pyr.alignment = WD_TABLE_ALIGNMENT.CENTER
set_table_borders(table_pyr, color="2563EB", sz="8")

# Row 0: Tier 1
cell_t1 = table_pyr.cell(0, 0)
set_cell_background(cell_t1, "1E3A8A")
set_cell_margins(cell_t1, top=120, bottom=120, left=150, right=150)
p_t1 = cell_t1.paragraphs[0]
p_t1.alignment = WD_ALIGN_PARAGRAPH.CENTER
r_t1_title = p_t1.add_run("TẦNG 1: TRANG CHỦ (HOME PAGE - /)\n")
r_t1_title.font.bold = True
r_t1_title.font.size = Pt(11)
r_t1_title.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
r_t1_desc = p_t1.add_run("Định vị thương hiệu - Điểm điều hướng trung tâm & Phân luồng hành vi khách hàng")
r_t1_desc.font.size = Pt(9.5)
r_t1_desc.font.color.rgb = RGBColor(0xDB, 0xEA, 0xFE)

# Row 1: Tier 2
cell_t2 = table_pyr.cell(1, 0)
set_cell_background(cell_t2, "F8FAFC")
set_cell_margins(cell_t2, top=120, bottom=120, left=150, right=150)
p_t2 = cell_t2.paragraphs[0]
r_t2_title = p_t2.add_run("TẦNG 2: 4 CORE HUBS DẪN DẮT (TẬP TRUNG CHỨC NĂNG)\n")
r_t2_title.font.bold = True
r_t2_title.font.size = Pt(10.5)
r_t2_title.font.color.rgb = RGBColor(0x1E, 0x40, 0xAF)

p_t2_hubs = cell_t2.add_paragraph()
p_t2_hubs.add_run("• Hub 1: GIỚI THIỆU (/gioi-thieu) — About & Experts Hub\n")
p_t2_hubs.add_run("• Hub 2: DỊCH VỤ (/dich-vu) — Services Hub (Audit, Tư vấn, Huấn luyện)\n")
p_t2_hubs.add_run("• Hub 3: SẢN PHẨM / LMS (/san-pham) — Product Catalog & Courses Hub\n")
p_t2_hubs.add_run("• Hub 4: TÀI NGUYÊN (/tai-nguyen) — Thought Leadership, Blog & FAQs Hub")

# Row 2: Tier 3
cell_t3 = table_pyr.cell(2, 0)
set_cell_background(cell_t3, "FFFFFF")
set_cell_margins(cell_t3, top=120, bottom=120, left=150, right=150)
p_t3 = cell_t3.paragraphs[0]
r_t3_title = p_t3.add_run("TẦNG 3: TRANG CON & CHI TIẾT NỘI DUNG (SUB-PAGES & DETAILS)\n")
r_t3_title.font.bold = True
r_t3_title.font.size = Pt(10.5)
r_t3_title.font.color.rgb = RGBColor(0x37, 0x30, 0xA3)

p_t3_sub = cell_t3.add_paragraph()
p_t3_sub.add_run("• Trang con Giới thiệu: Câu chuyện thương hiệu, Tầm nhìn/Sứ mệnh, Lộ trình Lean AI 5B™, Hồ sơ chuyên gia, Đối tác.\n")
p_t3_sub.add_run("• Trang con Dịch vụ: Kiểm định AI Audit, Tư vấn chiến lược AI-First, Huấn luyện đồng hành thực chiến.\n")
p_t3_sub.add_run("• Chi tiết Đào tạo & Sản phẩm: Masterclass Series (AI Marketing Playbook...), Khóa ngắn hạn, Sách trắng, LMS App.\n")
p_t3_sub.add_run("• Trang Bài viết Tài nguyên: Case Studies ROI thực chứng, Phân tích Pháp lý AI 2026, Góc nhìn Chuyên gia, FAQs C-Suite.")

# Row 3: Tier Target
cell_tt = table_pyr.cell(3, 0)
set_cell_background(cell_tt, "065F46")
set_cell_margins(cell_tt, top=120, bottom=120, left=150, right=150)
p_tt = cell_tt.paragraphs[0]
p_tt.alignment = WD_ALIGN_PARAGRAPH.CENTER
r_tt_title = p_tt.add_run("TẦNG ĐÍCH: LANDING PAGES / SALES PAGES / BIỂU MẪU ĐĂNG KÝ\n")
r_tt_title.font.bold = True
r_tt_title.font.size = Pt(10.5)
r_tt_title.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
r_tt_desc = p_tt.add_run("Landing Page AI Quick Scan™ | Landing Page Lead by Agentic AI | Form Đăng ký Tư vấn | Trang Liên hệ")
r_tt_desc.font.size = Pt(9.5)
r_tt_desc.font.color.rgb = RGBColor(0xD1, 0xFA, 0xE5)

doc.add_paragraph() # Spacer

# SECTION 2: DETAILED TABLE
h2 = doc.add_heading(level=1)
r_h2 = h2.add_run("2. SITEMAP CHI TIẾT & BẢN ĐỒ ĐƯỜNG DẪN (URL SCHEMA)")
r_h2.font.size = Pt(13)
r_h2.font.bold = True
r_h2.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)

table_data = [
    ("TẦNG 1", "Trang Chủ", "/", "Hero section video, Định vị AIxB, 3 Box giải pháp (Quản lý, Leader, Doanh nghiệp), Khóa học tiêu biểu, Ý kiến chuyên gia, Lead Form, Tin tức & Logo Đối tác (Vietcombank, MB Bank, Viettel...)."),
    ("TẦNG 2", "Giới Thiệu (About Hub)", "/gioi-thieu", "Tổng quan Học viện AIxB, Bối cảnh Chuyển đổi AI cho doanh nghiệp Việt, Định vị thương hiệu."),
    ("TẦNG 3", "Câu Chuyện Thương Hiệu", "/gioi-thieu/cau-chuyen-thuong-hieu", "Xuất phát điểm từ CSMO, Kết nối Niềm tin & Khát vọng, Tuyên bố định vị, Tagline thương hiệu."),
    ("TẦNG 3", "Tầm Nhìn - Sứ Mệnh - Giá Trị", "/gioi-thieu/tam-nhin-su-menh-gia-tri", "4 Giá trị cốt lõi: Hòa hợp bền vững, Tự chủ & Thực chiến, Hiệu suất & ROI, Sovereign AI."),
    ("TẦNG 3", "Sự Khác Biệt (USP)", "/gioi-thieu/su-khac-biet-usp", "Tôn chỉ 'Huấn luyện đồng hành - Tư vấn chuyên nghiệp - Đào tạo chuyển giao'."),
    ("TẦNG 3", "Mô Hình & Phương Pháp", "/gioi-thieu/mo-hinh-va-phuong-phap", "Mô hình Consulting-led Training & Lộ trình 5 bước Lean AI 5B™ (Belief, Baseline, Benchmark, Buildout, Boost)."),
    ("TẦNG 3", "Hội Đồng Chuyên Gia", "/gioi-thieu/chuyen-gia", "Danh sách GS.TS Vũ Anh Dũng, Chuyên gia Bùi Quý Phong, Chuyên gia Đinh Trần Tuấn Linh..."),
    ("TẦNG 3", "Hồ Sơ Chuyên Gia Chi Tiết", "/gioi-thieu/chuyen-gia/[slug]", "Trang CV / Profile năng lực chi tiết của từng cố vấn/chuyên gia."),
    ("TẦNG 3", "Đối Tác & Chứng Nhận", "/gioi-thieu/doi-tac-va-chung-nhan", "Danh sách đối tác doanh nghiệp, hiệp hội nghề nghiệp & trường đại học hợp tác."),
    ("TẦNG 2", "Dịch Vụ (Services Hub)", "/dich-vu", "Tổng quan 3 trụ cột dịch vụ tư vấn & đồng hành của AIxB."),
    ("TẦNG 3", "Kiểm Định AI (Audit)", "/dich-vu/kiem-dinh-ai-audit", "Đánh giá thực trạng dữ liệu, quy trình và mức độ sẵn sàng AI của doanh nghiệp."),
    ("TẦNG 3", "Tư Vấn Chiến Lược AI", "/dich-vu/tu-van-chien-luoc", "Tư vấn chuyển đổi mô hình kinh doanh AI-First theo khung Lean AI 5B™."),
    ("TẦNG 3", "Huấn Luyện Đồng Hành", "/dich-vu/huan-luyen-dong-hanh", "Chương trình đào tạo & huấn luyện thực chiến tại chỗ (In-house Training)."),
    ("TẦNG 2", "Sản Phẩm & Đào Tạo (Catalog)", "/san-pham", "Danh mục các giải pháp đào tạo, khóa học & sản phẩm tri thức AIxB."),
    ("TẦNG 3", "Khóa Học Masterclass", "/san-pham/masterclass", "Mini-MBA Series: AI Marketing Playbook, Data & AI Business Transformation..."),
    ("TẦNG 3", "Khóa Học Ngắn Hạn", "/san-pham/khoa-hoc-ngan-han", "Các workshop chuyên đề kỹ năng AI ứng dụng cho từng bộ phận chuyên môn."),
    ("TẦNG 3", "Tài Liệu & Sách Trắng", "/san-pham/tai-lieu-bach-khoa", "Thư viện Prompt nội bộ, SOPs quy trình chuẩn & Whitepapers ngành."),
    ("TẦNG 3", "Nền Tảng LMS Học Viên", "/san-pham/lms-app", "Giới thiệu & Cổng truy cập hệ thống LMS tương tác trực tuyến cho học viên."),
    ("TẦNG 2", "Tài Nguyên (Resources Hub)", "/tai-nguyen", "Trung tâm chia sẻ tri thức, bài viết chuyên môn & sự kiện của AIxB."),
    ("TẦNG 3", "Case Studies Thực Tế", "/tai-nguyen/case-studies", "Tổng hợp các dự án chuyển đổi AI thành công và bài toán ROI thực chứng."),
    ("TẦNG 3", "Phân Tích Pháp Lý AI 2026", "/tai-nguyen/phap-ly-ai", "Chuyên mục Sovereign AI: Phân tích Luật AI 2026, PDPL & Bảo mật dữ liệu nội bộ."),
    ("TẦNG 3", "Góc Nhìn Chuyên Gia (Blog)", "/tai-nguyen/goc-nhin-chuyen-gia", "Bài viết định hướng tư vấn, quản trị và bài học thực chiến từ các cố vấn."),
    ("TẦNG 3", "Sự Kiện & Webinar", "/tai-nguyen/webinar-su-kien", "Lịch tổ chức workshop trực tuyến, hội thảo chuyên đề & video phát lại."),
    ("TẦNG 3", "Hệ Thống FAQs Chi Tiết", "/tai-nguyen/faqs", "Giải đáp thắc mắc C-Suite về mô hình AI-Native, Sovereign AI, chi phí & lộ trình."),
    ("TẦNG ĐÍCH", "Trang Liên Hệ Chính Thức", "/lien-he", "Địa chỉ học viện, thông tin liên lạc, bản đồ vị trí & kênh hỗ trợ Zalo/Email."),
    ("TẦNG ĐÍCH", "Form Đăng Ký Tư Vấn", "/dang-ky-tu-van", "Biểu mẫu đặt lịch tư vấn trực tiếp 1-1 với Chuyên gia chuyên trách AIxB."),
    ("TẦNG ĐÍCH", "Landing Page: AI Quick Scan™", "/landing/ai-quick-scan", "Landing page bán gói dịch vụ kiểm định mức độ sẵn sàng AI của doanh nghiệp."),
    ("TẦNG ĐÍCH", "Landing Page: Lead by Agentic AI", "/landing/lead-by-agentic-ai", "Landing page chi tiết chiêu sinh khóa học Masterclass Lãnh đạo AI."),
    ("PHÁP LÝ", "Chính Sách Bảo Mật", "/chinh-sach-bao-mat", "Cam kết bảo mật dữ liệu cá nhân & dữ liệu doanh nghiệp tuân thủ PDPL."),
    ("PHÁP LÝ", "Điều Khoản Sử Dụng", "/dieu-khoan-su-dung", "Quy định về bản quyền nội dung, tài nguyên học tập & trách nhiệm người dùng.")
]

table_map = doc.add_table(rows=len(table_data) + 1, cols=4)
table_map.alignment = WD_TABLE_ALIGNMENT.CENTER
set_table_borders(table_map, color="CBD5E1", sz="4")

col_widths = [Inches(1.0), Inches(2.2), Inches(2.2), Inches(3.2)]

# Header Row
hdr_cells = table_map.rows[0].cells
hdr_titles = ["Phân Tầng", "Tên Trang (Title)", "Đường Dẫn (URL Slug)", "Mục Tiêu & Nội Dung Cốt Lõi"]
for i, title in enumerate(hdr_titles):
    hdr_cells[i].width = col_widths[i]
    set_cell_background(hdr_cells[i], "0F172A")
    set_cell_margins(hdr_cells[i], top=100, bottom=100, left=120, right=120)
    p = hdr_cells[i].paragraphs[0]
    r = p.add_run(title)
    r.font.bold = True
    r.font.size = Pt(9.5)
    r.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)

# Data Rows
for row_idx, data in enumerate(table_data, start=1):
    row_cells = table_map.rows[row_idx].cells
    bg_color = "F8FAFC" if row_idx % 2 == 0 else "FFFFFF"
    
    tier, title, slug, desc = data
    
    for i in range(4):
        row_cells[i].width = col_widths[i]
        set_cell_background(row_cells[i], bg_color)
        set_cell_margins(row_cells[i], top=80, bottom=80, left=100, right=100)
    
    # Tier cell
    p0 = row_cells[0].paragraphs[0]
    r0 = p0.add_run(tier)
    r0.font.bold = True
    r0.font.size = Pt(8.5)
    if tier == "TẦNG 1":
        r0.font.color.rgb = RGBColor(0x1E, 0x40, 0xAF)
    elif tier == "TẦNG 2":
        r0.font.color.rgb = RGBColor(0x37, 0x30, 0xA3)
    elif tier == "TẦNG ĐÍCH":
        r0.font.color.rgb = RGBColor(0x06, 0x5F, 0x46)
    else:
        r0.font.color.rgb = RGBColor(0x47, 0x55, 0x69)
        
    # Title cell
    p1 = row_cells[1].paragraphs[0]
    r1 = p1.add_run(title)
    r1.font.bold = (tier in ["TẦNG 1", "TẦNG 2", "TẦNG ĐÍCH"])
    r1.font.size = Pt(9.5)
    
    # Slug cell
    p2 = row_cells[2].paragraphs[0]
    r2 = p2.add_run(slug)
    r2.font.name = 'Consolas'
    r2.font.size = Pt(9)
    r2.font.color.rgb = RGBColor(0x1D, 0x4E, 0xD8)
    
    # Desc cell
    p3 = row_cells[3].paragraphs[0]
    r3 = p3.add_run(desc)
    r3.font.size = Pt(9)

doc.add_paragraph() # Spacer

# SECTION 3: NAVIGATION STRUCTURE
h3 = doc.add_heading(level=1)
r_h3 = h3.add_run("3. CẤU TRÚC ĐIỀU HƯỚNG MENU (NAVIGATION LAYOUT)")
r_h3.font.size = Pt(13)
r_h3.font.bold = True
r_h3.font.color.rgb = RGBColor(0x0F, 0x17, 0x2A)

# Header Menu
doc.add_heading("📌 Header Menu (Thanh Điều Hướng Trên)", level=2)
p_hm = doc.add_paragraph()
p_hm.add_run("1. Trang Chủ (/)\n")
p_hm.add_run("2. Giới Thiệu ▾ (/gioi-thieu)\n")
p_hm.add_run("   ├── Câu chuyện thương hiệu (/gioi-thieu/cau-chuyen-thuong-hieu)\n")
p_hm.add_run("   ├── Tầm nhìn - Sứ mệnh - Giá trị (/gioi-thieu/tam-nhin-su-menh-gia-tri)\n")
p_hm.add_run("   ├── Hội đồng chuyên gia (/gioi-thieu/chuyen-gia)\n")
p_hm.add_run("   └── Mô hình Lean AI 5B™ (/gioi-thieu/mo-hinh-va-phuong-phap)\n")
p_hm.add_run("3. Dịch Vụ ▾ (/dich-vu)\n")
p_hm.add_run("   ├── Kiểm định AI Audit (/dich-vu/kiem-dinh-ai-audit)\n")
p_hm.add_run("   ├── Tư vấn chiến lược (/dich-vu/tu-van-chien-luoc)\n")
p_hm.add_run("   └── Huấn luyện đồng hành (/dich-vu/huan-luyen-dong-hanh)\n")
p_hm.add_run("4. Sản Phẩm & Đào Tạo ▾ (/san-pham)\n")
p_hm.add_run("   ├── Masterclass Lãnh đạo (/san-pham/masterclass)\n")
p_hm.add_run("   ├── Khóa học ngắn hạn (/san-pham/khoa-hoc-ngan-han)\n")
p_hm.add_run("   ├── Tài liệu & Sách trắng (/san-pham/tai-lieu-bach-khoa)\n")
p_hm.add_run("   └── Cổng LMS Học viên (/san-pham/lms-app)\n")
p_hm.add_run("5. Tài Nguyên ▾ (/tai-nguyen)\n")
p_hm.add_run("   ├── Case Studies & Pháp lý AI 2026 (/tai-nguyen/case-studies)\n")
p_hm.add_run("   ├── Góc nhìn chuyên gia & Webinar (/tai-nguyen/goc-nhin-chuyen-gia)\n")
p_hm.add_run("   └── Hệ thống FAQs (/tai-nguyen/faqs)\n")
p_hm.add_run("6. Nút Action CTA: [Trò chuyện với chuyên gia] -> Link /dang-ky-tu-van")

# Footer Navigation
doc.add_heading("📌 Footer Navigation (Chân Trang 5 Cột)", level=2)
p_fm = doc.add_paragraph()
p_fm.add_run("• Cột 1 (Branding AIxB): Logo AIxB, Tagline 'Kiến tạo lợi thế cạnh tranh, đồng hành chuyển giao giá trị', Social Icons (FB, LinkedIn, YouTube, Zalo).\n")
p_fm.add_run("• Cột 2 (Về AIxB): Câu chuyện thương hiệu, Đội ngũ chuyên gia, Lộ trình Lean AI 5B™, Đối tác & Chứng nhận.\n")
p_fm.add_run("• Cột 3 (Chương Trình & Dịch Vụ): AI Marketing Playbook, Data Transformation, Services Audit, Cổng LMS.\n")
p_fm.add_run("• Cột 4 (Tri Thức & Hỗ Trợ): Case Studies, Pháp lý AI 2026, Webinar, FAQs & Điều khoản bảo mật.\n")
p_fm.add_run("• Cột 5 (Đăng Ký Nhận Tin): Biểu mẫu Newsletter nhận thông tin tin tức, lời mời sự kiện & tài liệu độc quyền từ AIxB.")

# FOOTER META
p_ft = doc.add_paragraph()
p_ft.alignment = WD_ALIGN_PARAGRAPH.CENTER
r_ft = p_ft.add_run("\nTài liệu Bản quyền thuộc về Học viện Tư vấn, Đào tạo Quản trị và Chuyển đổi AI (AIxB) © 2026")
r_ft.font.size = Pt(8.5)
r_ft.font.color.rgb = RGBColor(0x94, 0xA3, 0xB8)

docx_path = os.path.abspath("Sitemap_AIxB_v3.1.docx")
doc.save(docx_path)
print(f"DOCX created successfully at: {docx_path} (Size: {os.path.getsize(docx_path)} bytes)")
