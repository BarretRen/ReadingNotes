// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="../index.html"><strong aria-hidden="true">1.</strong> README</a></li><li class="chapter-item affix "><li class="part-title">杂烩</li><li class="chapter-item "><a href="杂烩/archlinux_wsl.html"><strong aria-hidden="true">2.</strong> archlinux WSL安装</a></li><li class="chapter-item "><a href="杂烩/批量下载语雀知识库文档.html"><strong aria-hidden="true">3.</strong> 批量下载语雀知识库文档</a></li><li class="chapter-item "><a href="杂烩/markdown自定义样式.html"><strong aria-hidden="true">4.</strong> markdown自定义样式</a></li><li class="chapter-item "><a href="杂烩/Putty的ColorTheme分享.html"><strong aria-hidden="true">5.</strong> Putty的ColorTheme分享</a></li><li class="chapter-item "><a href="杂烩/Vim折叠方式和卡顿.html"><strong aria-hidden="true">6.</strong> Vim折叠方式和卡顿</a></li><li class="chapter-item "><a href="杂烩/如何更新fork的repo.html"><strong aria-hidden="true">7.</strong> 如何更新fork的repo</a></li><li class="chapter-item "><a href="杂烩/一次难忘的宏定义debug.html"><strong aria-hidden="true">8.</strong> 一次难忘的宏定义debug</a></li><li class="chapter-item "><a href="杂烩/一张图弄明白开源协议.html"><strong aria-hidden="true">9.</strong> 一张图弄明白开源协议</a></li><li class="chapter-item affix "><li class="part-title">闲书笔记</li><li class="chapter-item "><a href="闲书笔记/网络文摘.html"><strong aria-hidden="true">10.</strong> 网络文摘</a></li><li class="chapter-item "><a href="闲书笔记/低水平勤奋陷阱.html"><strong aria-hidden="true">11.</strong> 低水平勤奋陷阱</a></li><li class="chapter-item "><a href="闲书笔记/疲惫生活中的英雄梦想.html"><strong aria-hidden="true">12.</strong> 疲惫生活中的英雄梦想</a></li><li class="chapter-item "><a href="闲书笔记/阿里工程师的自我修养.html"><strong aria-hidden="true">13.</strong> 阿里工程师的自我修养</a></li><li class="chapter-item "><a href="闲书笔记/程序员的职业素养.html"><strong aria-hidden="true">14.</strong> 程序员的职业素养</a></li><li class="chapter-item "><a href="闲书笔记/高效能人士的七个习惯.html"><strong aria-hidden="true">15.</strong> 高效能人士的七个习惯</a></li><li class="chapter-item affix "><li class="part-title">敏捷项目管理</li><li class="chapter-item "><a href="敏捷管理/敏捷宣言.html"><strong aria-hidden="true">16.</strong> 敏捷宣言</a></li><li class="chapter-item "><a href="敏捷管理/人月神话.html"><strong aria-hidden="true">17.</strong> 人月神话</a></li><li class="chapter-item "><a href="敏捷管理/凤凰项目.html"><strong aria-hidden="true">18.</strong> 凤凰项目</a></li><li class="chapter-item "><div><strong aria-hidden="true">19.</strong> ScrumXP</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="敏捷管理/ScrumXP/1如何编写backlog.html"><strong aria-hidden="true">19.1.</strong> 如何编写backlog</a></li><li class="chapter-item "><a href="敏捷管理/ScrumXP/2SprintPlanning.html"><strong aria-hidden="true">19.2.</strong> Sprint Planning</a></li><li class="chapter-item "><a href="敏捷管理/ScrumXP/3Scrum例会.html"><strong aria-hidden="true">19.3.</strong> Scrum例会</a></li><li class="chapter-item "><a href="敏捷管理/ScrumXP/4Demo和SprintReview.html"><strong aria-hidden="true">19.4.</strong> Demo和Sprint Review</a></li><li class="chapter-item "><a href="敏捷管理/ScrumXP/5Scrum和XP的组合.html"><strong aria-hidden="true">19.5.</strong> Scrum和XP的组合</a></li><li class="chapter-item "><a href="敏捷管理/ScrumXP/6如何管理多个Scrum团队.html"><strong aria-hidden="true">19.6.</strong> 如何管理多个Scrum团队</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">20.</strong> Scrum精髓</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="敏捷管理/Scrum精髓/1Scrum框架.html"><strong aria-hidden="true">20.1.</strong> Scrum框架</a></li><li class="chapter-item "><a href="敏捷管理/Scrum精髓/2敏捷原则.html"><strong aria-hidden="true">20.2.</strong> 敏捷原则</a></li><li class="chapter-item "><a href="敏捷管理/Scrum精髓/3迭代周期Sprint.html"><strong aria-hidden="true">20.3.</strong> 迭代周期Sprint</a></li><li class="chapter-item "><a href="敏捷管理/Scrum精髓/4需求和UserStory.html"><strong aria-hidden="true">20.4.</strong> 需求和User Story</a></li><li class="chapter-item "><a href="敏捷管理/Scrum精髓/5技术债.html"><strong aria-hidden="true">20.5.</strong> 技术债</a></li><li class="chapter-item "><a href="敏捷管理/Scrum精髓/6产品负责人.html"><strong aria-hidden="true">20.6.</strong> 产品负责人</a></li><li class="chapter-item "><a href="敏捷管理/Scrum精髓/7ScrumMaster.html"><strong aria-hidden="true">20.7.</strong> Scrum Master</a></li><li class="chapter-item "><a href="敏捷管理/Scrum精髓/8开发团队.html"><strong aria-hidden="true">20.8.</strong> 开发团队</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">21.</strong> DevOps</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="敏捷管理/DevOps/1DevOps简介.html"><strong aria-hidden="true">21.1.</strong> DevOps简介</a></li><li class="chapter-item "><a href="敏捷管理/DevOps/2如何启动DevOps转型.html"><strong aria-hidden="true">21.2.</strong> 如何启动DevOps转型</a></li><li class="chapter-item "><a href="敏捷管理/DevOps/3流动原则的实践.html"><strong aria-hidden="true">21.3.</strong> 流动原则的实践</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">22.</strong> 赋能</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="敏捷管理/赋能/1应对不确定性.html"><strong aria-hidden="true">22.1.</strong> 应对不确定性</a></li><li class="chapter-item "><a href="敏捷管理/赋能/2化繁为简.html"><strong aria-hidden="true">22.2.</strong> 化繁为简</a></li><li class="chapter-item "><a href="敏捷管理/赋能/3信息共享.html"><strong aria-hidden="true">22.3.</strong> 信息共享</a></li><li class="chapter-item "><a href="敏捷管理/赋能/4赋能.html"><strong aria-hidden="true">22.4.</strong> 赋能</a></li><li class="chapter-item "><a href="敏捷管理/赋能/5走在时代前面.html"><strong aria-hidden="true">22.5.</strong> 走在时代前面</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">23.</strong> 工作收获</div><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="敏捷管理/工作收获/NokiaProductLifeCycle.html"><strong aria-hidden="true">23.1.</strong> Nokia Product Life Cycle</a></li><li class="chapter-item "><a href="敏捷管理/工作收获/项目成功的基本准则.html"><strong aria-hidden="true">23.2.</strong> 项目成功的基本准则</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
