<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="index.html">
                    <i class="mdi mdi-grid-large menu-icon"></i>
                    <span class="menu-title">Dashboard</span>
                </a>
            </li>
            <li class="nav-item nav-category">Master Data</li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false"
                    aria-controls="ui-basic">
                    <i class="menu-icon mdi mdi-account-card-details
                    "></i>
                    <span class="menu-title">Dokter</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-basic">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Data Dokter</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="collapse" href="#apotek" aria-expanded="false"
                    aria-controls="ui-basic">
                    <i class="menu-icon mdi mdi-store-24-hour
                    "></i>
                    <span class="menu-title">Apotek</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="apotek">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Data Apotek</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item nav-category">Account Settings</li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="collapse" href="#ui-account" aria-expanded="false"
                    aria-controls="ui-basic">
                    <i class="menu-icon mdi mdi-account-key
                    "></i>
                    <span class="menu-title">Admin</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="ui-account">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Data Admin</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item nav-category">help</li>
            <li class="nav-item">
                <a class="nav-link" href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html">
                    <i class="menu-icon mdi mdi-file-document"></i>
                    <span class="menu-title">Documentation</span>
                </a>
            </li>
        </ul>
    </nav>
</template>