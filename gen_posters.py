"""
Pull submissions from CMT in excel form
Remove unneeded columns
Save as CSV
strip non utf8 characters

    conv -f utf-8 -t utf-8 -c nedbday.csv  > foo
    mv foo nedbday.csv

import into postgres

    importmydata.py nedbday test nedbday.csv

run this script
  
    python gen_posters.py > posters.html

copy posters.html into template file

"""
from sqlalchemy import *

db = create_engine("postgresql://localhost/test")
conn = db.connect()

q = """
select distinct name, title, abstract from nedbday
where status <> 'Accepted'
order by name
"""

template = """
         <tr>
          <td>
              %s<br/>
              <strong>%s</strong><br/>
              <a href="javascript: toggleVisibility ('#po%s')">Toggle Abstract</a>
              <div id="po%s" class="abstract" style="display: none;">
                <p>
                %s
                </p>
              </div>
          </td>
        </tr>

"""
cur = conn.execute(q)
for idx, row in enumerate(cur):
  print template % (row[0], row[1], idx, idx, row[2])
