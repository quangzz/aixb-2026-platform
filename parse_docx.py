import docx
from docx.oxml.text.paragraph import CT_P
from docx.oxml.table import CT_Tbl

doc = docx.Document('Copy of Nội dung Website AIxB (v3.1).docx')
lines = []
for child in doc.element.body:
    if isinstance(child, CT_P):
        p = docx.text.paragraph.Paragraph(child, doc)
        if p.text.strip():
            style_name = p.style.name if p.style else "Normal"
            lines.append(f"[{style_name}] {p.text.strip()}")
    elif isinstance(child, CT_Tbl):
        table = docx.table.Table(child, doc)
        lines.append("=== TABLE START ===")
        for row in table.rows:
            # Clean duplicate cells due to grid span
            seen = []
            for cell in row.cells:
                txt = cell.text.strip().replace('\n', ' // ')
                seen.append(txt)
            lines.append(" | ".join(seen))
        lines.append("=== TABLE END ===")

with open('parsed_docx_ordered.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))
print(f"Saved {len(lines)} lines")
