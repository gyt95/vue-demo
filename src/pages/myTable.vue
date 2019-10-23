<template>
  <div class="ekt-table-box">
      <div class="ekt-table ekt-table--border ekt-table--scrollable-x ekt-table--scrollable-y" style="width:800px;height:581px;"> <!--高度由表头+表内容高度而定-->
          <div class="ekt-table__header-wrapper"> <!-- 表头不设高度 -->
              <table cellspacing="0" cellpadding="0" border="0" width="1100">
                  <colgroup> <!-- 表格单元列 -->
                    <col width="50">
                    <col width="50">
                    <col width="150">
                    <col width="100"> <!-- 10.09 -->
                    <col width="100"> <!-- 10.10 -->
                    <col width="100"> <!-- 10.11 -->
                    <col width="100"> <!-- 10.12 -->
                    <col width="100"> <!-- 10.13 -->
                  </colgroup>
                  <thead>
                      <tr>
                          <th colspan="1" rowspan="4" class="is-leaf"> <!-- colspan合并列 rowspan合并行 -->
                              <div class="cell">筛选1</div>
                          </th>
                          <th colspan="1" rowspan="4" class="is-leaf">
                              <div class="cell">筛选2</div>
                          </th>
                          <th colspan="1" rowspan="4" class="is-leaf">
                              <div class="cell">筛选3</div>
                          </th>
                          <th colspan="5" rowspan="1" class="is-leaf"> <!-- 此处colspan的列数应该是由选中的日期范围而定，而且是10月的才计算其中 -->
                              <div class="cell">10月</div>
                          </th>
                      </tr>
                      <tr>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">9</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">10</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">11</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">12</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">13</div>
                          </th>
                      </tr>
                      <tr>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">周三</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">周四</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">周五</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">周六</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">周日</div>
                          </th>
                      </tr>
                      <tr>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">全部</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">全部</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">全部</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">全部</div>
                          </th>
                          <th colspan="1" rowspan="1" class="is-leaf">
                            <div class="cell">全部</div>
                          </th>
                      </tr>
                  </thead>
              </table>
          </div>
          <div class="ekt-table__body-wrapper" style="height:400px;">
              <table cellspacing="0" cellpadding="0" border="0" width="1100">
                  <colgroup>
                    <col width="50">
                    <col width="50">
                    <col width="150">
                    <col width="100"> <!-- 10.09 -->
                    <col width="100"> <!-- 10.10 -->
                    <col width="100"> <!-- 10.11 -->
                    <col width="100"> <!-- 10.12 -->
                    <col width="100"> <!-- 10.13 -->
                  </colgroup>
                  <tbody>
                      <tr class="ekt-table__row">
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">1号楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">10楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">中心手术室</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">156.33 / 30</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">229.21 / 46</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">199.20 / 51</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">217.54 / 4679</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">2.08 / 1</div>
                          </td>
                      </tr>
                      <tr class="ekt-table__row">
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">1号楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">12楼A区</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">产科</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">5.30 / 1</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">0.00 / 0</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">7.50 / 2</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">19.80 / 6</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">15.50 / 5</div>
                          </td>
                      </tr>
                      <tr class="ekt-table__row">
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">1号楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">16楼A区</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">外九科</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">156.33 / 30</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">229.21 / 46</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">199.20 / 51</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">217.54 / 4679</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">2.08 / 1</div>
                          </td>
                      </tr>
                      <tr class="ekt-table__row">
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">1号楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">27楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">耳鼻喉科门诊</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">5.30 / 1</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">0.00 / 0</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">7.50 / 2</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">19.80 / 6</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">15.50 / 5</div>
                          </td>
                      </tr>
                      <tr class="ekt-table__row">
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">1号楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">10楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">中心手术室</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">156.33 / 30</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">229.21 / 46</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">199.20 / 51</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">217.54 / 4679</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">2.08 / 1</div>
                          </td>
                      </tr>
                      <tr class="ekt-table__row">
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">1号楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">12楼A区</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">产科</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">5.30 / 1</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">0.00 / 0</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">7.50 / 2</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">19.80 / 6</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">15.50 / 5</div>
                          </td>
                      </tr>
                      <tr class="ekt-table__row">
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">1号楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">16楼A区</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">外九科</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">156.33 / 30</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">229.21 / 46</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">199.20 / 51</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">217.54 / 4679</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">2.08 / 1</div>
                          </td>
                      </tr>
                      <tr class="ekt-table__row">
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">1号楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">27楼</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">耳鼻喉科门诊</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">5.30 / 1</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">0.00 / 0</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">7.50 / 2</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">19.80 / 6</div>
                          </td>
                          <td colspan="1" rowspan="1" class="is-leaf">
                              <div class="cell">15.50 / 5</div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <!-- 非fixed，前3隐藏，fixed，后面隐藏 -->
          <div class="ekt-table__fixed" style="width:250px;height:581px;"> <!-- 宽度为需要fixed的几个单元列的宽度之和，这里是前3个的总和。高度为表头+表内容的高度 -->
              <div class="ekt-table__fixed-header-wrapper"> <!-- 表头不设高度 -->
                <table cellspacing="0" cellpadding="0" border="0" width="1100">
                    <colgroup> <!-- 表格单元列 -->
                        <col width="50">
                        <col width="50">
                        <col width="150">
                        <col width="100"> <!-- 10.09 -->
                        <col width="100"> <!-- 10.10 -->
                        <col width="100"> <!-- 10.11 -->
                        <col width="100"> <!-- 10.12 -->
                        <col width="100"> <!-- 10.13 -->
                    </colgroup>
                    <thead>
                        <tr>
                            <th colspan="1" rowspan="4" class="is-leaf"> <!-- colspan合并列 rowspan合并行 -->
                                <div class="cell">筛选1</div>
                            </th>
                            <th colspan="1" rowspan="4" class="is-leaf">
                                <div class="cell">筛选2</div>
                            </th>
                            <th colspan="1" rowspan="4" class="is-leaf">
                                <div class="cell">筛选3</div>
                            </th>
                            <th colspan="5" rowspan="1" class="is-leaf is-hidden"> <!-- 此处colspan的列数应该是由选中的日期范围而定，而且是10月的才计算其中 -->
                                <div class="cell">10月</div>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">9</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">10</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">11</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">12</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">13</div>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">周三</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">周四</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">周五</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">周六</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">周日</div>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">全部</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">全部</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">全部</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">全部</div>
                            </th>
                            <th colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">全部</div>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="ekt-table__fixed-body-wrapper" style="top:48px;height:400px;">
                <table cellspacing="0" cellpadding="0" border="0" width="1100">
                    <colgroup>
                        <col width="50">
                        <col width="50">
                        <col width="150">
                        <col width="100"> <!-- 10.09 -->
                        <col width="100"> <!-- 10.10 -->
                        <col width="100"> <!-- 10.11 -->
                        <col width="100"> <!-- 10.12 -->
                        <col width="100"> <!-- 10.13 -->
                    </colgroup>
                    <tbody>
                        <tr class="ekt-table__row">
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">1号楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">10楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">中心手术室</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">156.33 / 30</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">229.21 / 46</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">199.20 / 51</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">217.54 / 4679</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">2.08 / 1</div>
                            </td>
                        </tr>
                        <tr class="ekt-table__row">
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">1号楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">12楼A区</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">产科</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">5.30 / 1</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">0.00 / 0</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">7.50 / 2</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">19.80 / 6</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">15.50 / 5</div>
                            </td>
                        </tr>
                        <tr class="ekt-table__row">
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">1号楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">16楼A区</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">外九科</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">156.33 / 30</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">229.21 / 46</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">199.20 / 51</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">217.54 / 4679</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">2.08 / 1</div>
                            </td>
                        </tr>
                        <tr class="ekt-table__row">
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">1号楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">27楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">耳鼻喉科门诊</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">5.30 / 1</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">0.00 / 0</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">7.50 / 2</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">19.80 / 6</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">15.50 / 5</div>
                            </td>
                        </tr>
                        <tr class="ekt-table__row">
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">1号楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">10楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">中心手术室</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">156.33 / 30</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">229.21 / 46</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">199.20 / 51</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">217.54 / 4679</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">2.08 / 1</div>
                            </td>
                        </tr>
                        <tr class="ekt-table__row">
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">1号楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">12楼A区</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">产科</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">5.30 / 1</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">0.00 / 0</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">7.50 / 2</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">19.80 / 6</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">15.50 / 5</div>
                            </td>
                        </tr>
                        <tr class="ekt-table__row">
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">1号楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">16楼A区</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">外九科</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">156.33 / 30</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">229.21 / 46</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">199.20 / 51</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">217.54 / 4679</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">2.08 / 1</div>
                            </td>
                        </tr>
                        <tr class="ekt-table__row">
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">1号楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">27楼</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf">
                                <div class="cell">耳鼻喉科门诊</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">5.30 / 1</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">0.00 / 0</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">7.50 / 2</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">19.80 / 6</div>
                            </td>
                            <td colspan="1" rowspan="1" class="is-leaf is-hidden">
                                <div class="cell">15.50 / 5</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="less">
.ekt-table--border{
    border: 1px solid #ebeef5;
}
.ekt-table{
    table{
        .cell{  // 设置单元格的间距
            line-height: 23px;
            padding-left: 10px;
            padding-right: 10px;
        }
        td, th{
            border-right: 1px solid #ebeef5;
            padding: 12px 0;
        }
        td, .is-leaf{   // is-leaf就是表头设置border
            border-bottom: 1px solid #ebeef5;
        }
    }
    .ekt-table__header-wrapper{ // 避免表头溢出时仍然显示
        overflow: hidden;
    }
    .ekt-table__body-wrapper{
        position: relative;
    }
    .ekt-table__fixed{
        position: absolute;
        top: 0;
        left: 0;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .ekt-table__fixed-header-wrapper{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }
    .ekt-table__fixed-body-wrapper{
        position: absolute;
        left: 0;
        top: 37px;
        overflow: hidden; // 解决只有右侧非fixed列表滚动，fixed列不滚动问题
        z-index: 3;
    }
    th>.cell{
        position: relative;
        word-wrap: normal;
        text-overflow: ellipsis;
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
}
.ekt-table--scrollable-y .ekt-table__body-wrapper{  // 为了能y轴滚动
    overflow-y: auto;
}
.ekt-table--scrollable-x .ekt-table__body-wrapper{ // 为了能x轴滚动
    overflow-x: auto;
}
</style>