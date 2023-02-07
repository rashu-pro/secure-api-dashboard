<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Create Event Details</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="../../plugins/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- iCheck -->
    <link rel="stylesheet" href="../../plugins/iCheck/square/blue.css">
    <!-- Select2 -->
    <link rel="stylesheet" href="../../plugins/select2/select2.min.css">
    <!-- datepicker -->
    <link rel="stylesheet" href="../../plugins/datepicker/datepicker3.css">
    <!-- dropify -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Dropify/0.2.2/css/dropify.min.css" integrity="sha512-EZSUkJWTjzDlspOoPSpUFR0o0Xy7jdzW//6qhUkoZ9c4StFkVsp9fbbd0O06p9ELS3H486m4wmrCELjza4JEog==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Theme style -->
    <link rel="stylesheet" href="../../dist/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="../../dist/css/skins/_all-skins.min.css">

    <!-- iCheck -->
    <link rel="stylesheet" href="../../plugins/iCheck/square/blue.css">

    <!-- syncfusion css -->
    <link rel="stylesheet" href="../../dist/css/syncfusion.css">
    <!-- custom css -->
    <link rel="stylesheet" href="../../dist/css/custom.css?v=1.0.9">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition skin-red sidebar-mini">
<div class="wrapper">

    <!-- header -->
    <header class="main-header">
        <!-- Logo -->
        <a href="../../dashboard_new.html" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>A</b>LT</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Admin</b>LTE</span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>

            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- Messages: style can be found in dropdown.less-->
                    <li class="dropdown messages-menu dropdown-custom-action dropdown-company company-dropdown-js">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <div class="dropdown-toggle-content">
                                <div class="dropdown-toggle-content-inner">
                                    <div class="dropdown-toggle-icon">
                                        <img class="company-img" src="https://secure-api.net/resources/iws-icgc/238360_iws-icgc-mobile-logo.png" alt="company">
                                    </div>
                                    <div class="dropdown-toggle-title">IWS-ICGC</div>
                                </div>

                                <div class="dropdown-toggle-sign">
                                    <img src="../../dist/img/down-arrow_white.png" alt="dropdown-toggle">
                                </div>

                            </div>
                        </a>
                        <ul class="dropdown-menu">
                            <div class="input-group input-group-transparent">
                                <span class="input-group-addon"><i class="fa fa-search"></i></span>
                                <input type="text" class="form-control search-dropdown" placeholder="Search By Name">
                            </div>
                            <li>
                                <ul class="menu overlay-scrollbar-js">
                                    <li class="dropdown-menu-child current" data-text="IWS-ICGC">
                                        <a href="#">
                                            <div class="pull-left">
                                                <img class="company-img" src="https://secure-api.net/resources/iws-icgc/238360_iws-icgc-mobile-logo.png">
                                            </div>
                                            <h4 class="dropdown-child-title">
                                                IWS-ICGC
                                            </h4>
                                            <p class="dropdown-child-subtitle">
                                                CompanyAdmin
                                            </p>
                                        </a>
                                    </li>

                                    <li class="dropdown-menu-child" data-text="Demo-Mosque">
                                        <a href="#">
                                            <div class="pull-left">
                                                <img class="company-img" src="https://secure-api.net/resources/Demo-Mosque/951098_demo-mosque-mobile-logo.jpg">
                                            </div>
                                            <h4 class="dropdown-child-title">
                                                Demo-Mosque
                                            </h4>
                                            <p class="dropdown-child-subtitle">
                                                CompanyAdmin
                                            </p>
                                        </a>
                                    </li>

                                    <li class="dropdown-menu-child" data-text="ISNA">
                                        <a href="#">
                                            <div class="pull-left">
                                                <img class="company-img" src="https://secure-api.net/resources/isna/344172_60x60.png">
                                            </div>
                                            <h4 class="dropdown-child-title">
                                                ISNA
                                            </h4>
                                            <p class="dropdown-child-subtitle">
                                                CompanyAdmin
                                            </p>
                                        </a>
                                    </li>

                                    <li class="dropdown-menu-child" data-text="Al-Azhar Foundation">
                                        <a href="#">
                                            <div class="pull-left">
                                                <img class="company-img" src="https://secure-api.net/resources/Secure-api/948588_logo-masjid-main.png">
                                            </div>
                                            <h4 class="dropdown-child-title">
                                                Al-Azhar Foundation
                                            </h4>
                                            <p class="dropdown-child-subtitle">
                                                CompanyAdmin
                                            </p>
                                        </a>
                                    </li>

                                    <li class="dropdown-menu-child" data-text="IWS-ICGC">
                                        <a href="#">
                                            <div class="pull-left">
                                                <img class="company-img" src="https://secure-api.net/resources/iws-icgc/238360_iws-icgc-mobile-logo.png">
                                            </div>
                                            <h4 class="dropdown-child-title">
                                                IWS-ICGC
                                            </h4>
                                            <p class="dropdown-child-subtitle">
                                                CompanyAdmin
                                            </p>
                                        </a>
                                    </li>

                                    <li class="dropdown-menu-child" data-text="Demo-Mosque">
                                        <a href="#">
                                            <div class="pull-left">
                                                <img class="company-img" src="https://secure-api.net/resources/Demo-Mosque/951098_demo-mosque-mobile-logo.jpg">
                                            </div>
                                            <h4 class="dropdown-child-title">
                                                Demo-Mosque
                                            </h4>
                                            <p class="dropdown-child-subtitle">
                                                CompanyAdmin
                                            </p>
                                        </a>
                                    </li>

                                    <li class="dropdown-menu-child" data-text="Al-Azhar Foundation">
                                        <a href="#">
                                            <div class="pull-left">
                                                <img class="company-img" src="https://secure-api.net/resources/Secure-api/948588_logo-masjid-main.png">
                                            </div>
                                            <h4 class="dropdown-child-title">
                                                Al-Azhar Foundation
                                            </h4>
                                            <p class="dropdown-child-subtitle">
                                                CompanyAdmin
                                            </p>
                                        </a>
                                    </li>

                                    <li class="dropdown-menu-child" data-text="IWS-ICGC">
                                        <a href="#">
                                            <div class="pull-left">
                                                <img class="company-img" src="https://secure-api.net/resources/iws-icgc/238360_iws-icgc-mobile-logo.png">
                                            </div>
                                            <h4 class="dropdown-child-title">
                                                IWS-ICGC
                                            </h4>
                                            <p class="dropdown-child-subtitle">
                                                CompanyAdmin
                                            </p>
                                        </a>
                                    </li>

                                    <li class="dropdown-menu-child" data-text="Demo-Mosque">
                                        <a href="#">
                                            <div class="pull-left">
                                                <img class="company-img" src="https://secure-api.net/resources/Demo-Mosque/951098_demo-mosque-mobile-logo.jpg">
                                            </div>
                                            <h4 class="dropdown-child-title">
                                                Demo-Mosque
                                            </h4>
                                            <p class="dropdown-child-subtitle">
                                                CompanyAdmin
                                            </p>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </li>

                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="../../dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                            <span class="hidden-xs">Alexander Pierce</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <img src="../../dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                                <p>
                                    Alexander Pierce - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            <!-- Menu Body -->
                            <li class="user-body">
                                <div class="row">
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Followers</a>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Sales</a>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Friends</a>
                                    </div>
                                </div>
                                <!-- /.row -->
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a href="#" class="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>


    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">

            <!-- Sidebar user panel (optional) -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="../../dist/img/avatar.png" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>admin</p>

                    <!-- Status -->
                    <a href="javascript:void(0)"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <ul class="sidebar-menu">
                <li class="header">MENU</li>
                <!-- Optionally, you can add icons to the links -->

                <li class="">
                    <a href="../../dashboard_new.html" data-route="/secure_api_dashboard/dashboard_new.html"><i class="fa fa-tachometer"></i> <span>Dashboard</span></a>
                </li>

                <li class="">
                    <a href="#">
                        <i class="fa fa-graduation-cap"></i> <span>School</span>
                        <span class="pull-right-container">
                    <i class="fa fa-angle-right pull-right"></i>
                </span>
                    </a>
                </li>

                <li class="">
                    <a href="../tables/data_class_v5.html"
                       class="menu-link"
                       data-route="/secure_api_dashboard/pages/tables/data_class_v5.html"><i class="fa fa-university"></i> <span>Classes</span></a>
                </li>

                <li class="">
                    <a href="../tables/data_registrations.html"
                       class="menu-link"
                       data-route="/secure_api_dashboard/pages/tables/data_registrations.html"><i class="fa fa-list"></i> <span>Registrations</span></a>

                </li>
                <li class="treeview">
                    <a href="../tables/data_students.html"
                       class="menu-link"
                       data-route="/secure_api_dashboard/pages/tables/data_students.html"><i class="fa fa-graduation-cap"></i> <span>Students</span></a>
                    <ul class="treeview-menu">
                        <li class=""><a href="../tables/data_student_details.html"
                                        class="menu-link"
                                        data-route="/secure_api_dashboard/pages/tables/data_student_details.html">Student Details</a> </li>
                    </ul>
                </li>
                <li class="">
                    <a href="javascript:void(0)"><i class="fa fa-male"></i> <span>Parents</span></a>

                </li>
                <li class="">
                    <a href="../tables/data_person_details.html"
                       class="menu-link"
                       data-route="/secure_api_dashboard/pages/tables/data_person_details.html"><i class="fa fa-male"></i> <span>Profile</span></a>

                </li>
                <li class="">
                    <a href="javascript:void(0)"><i class="fa fa-user"></i> <span>Teachers</span></a>

                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-cog"></i> <span>Settings</span>
                        <span class="pull-right-container">
                    <i class="fa fa-angle-right pull-right"></i>
                </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="../tables/data_topics.html"
                               class="menu-link"
                               data-route="/secure_api_dashboard/pages/tables/data_topics.html">Topics</a></li>

                    </ul>
                </li>
                <li class="treeview ">
                    <a href="#">
                        <i class="fa fa-sticky-note"></i> <span>Assignments</span>
                        <span class="pull-right-container">
                    <i class="fa fa-angle-right pull-right"></i>
                </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="../tables/data_assignments.html"
                               class="menu-link"
                               data-route="/secure_api_dashboard/pages/tables/data_assignments.html">Due Assignments</a></li>
                        <li><a href="form_create_assignment.html"
                               class="menu-link"
                               data-route="/secure_api_dashboard/pages/forms/form_create_assignment.html">Create Assignment</a></li>
                        <li><a href="../tables/data_assignments.html"
                               class="menu-link"
                               data-route="/secure_api_dashboard/pages/tables/data_assignments.html">All Assignments</a></li>
                    </ul>
                </li>

                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-calendar"></i> <span>Events</span>
                        <span class="pull-right-container">
                    <i class="fa fa-angle-right pull-right"></i>
                </span>
                    </a>
                    <ul class="treeview-menu">
                        <li class=""><a href="../tables/data_events.html"
                                        class="menu-link"
                                        data-route="/secure_api_dashboard/pages/tables/data_events.html">Event List</a></li>
                    </ul>
                </li>

                <li class="treeview ">
                    <a href="#">
                        <i class="fa fa-users"></i> <span>Persons</span>
                        <span class="pull-right-container">
                    <i class="fa fa-angle-right pull-right"></i>
                </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="javascript:void(0)">All Persons</a></li>

                    </ul>
                </li>

                <li class="treeview ">
                    <a href="#">
                        <i class="fa fa-gift"></i> <span>Payments</span>
                        <span class="pull-right-container">
                    <i class="fa fa-angle-right pull-right"></i>
                </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="javascript:void(0)">Pledges</a></li>
                        <li><a href="/admin/give/payments">Payments</a></li>
                        <li><a href="/admin/give/company/cc-donations">CC Charges</a></li>
                        <li><a href="/admin/give/company/customers">CC Customers</a></li>
                        <li><a href="/admin/give/company/settings">Setup</a></li>
                        <li><a href="/admin/give/company/deposits">CC Deposits</a></li>
                        <li><a href="/admin/donation/categories">Donation Categories</a></li>
                        <li><a href="/admin/give/company/products">CC Products</a></li>

                    </ul>
                </li>
                <li class="">
                    <a href="/admin/users"><i class="fa fa-user"></i> <span>User Settings</span></a>

                </li>

                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-cog"></i> <span>Components</span>
                        <span class="pull-right-container">
                    <i class="fa fa-angle-right pull-right"></i>
                </span>
                    </a>
                    <ul class="treeview-menu">
                        <li class=""><a href="../components/btn_action.html"
                                        class="menu-link"
                                        data-route="/secure_api_dashboard/pages/components/btn_action.html"> Action Button </a></li>
                        <li class=""><a href="../components/btn_action_no_text.html"
                                        class="menu-link"
                                        data-route="/secure_api_dashboard/pages/components/btn_action_no_text.html"> Action Button (no text) </a></li>
                    </ul>
                </li>
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- event navigation -->
        <div class="bg-white nav-event-navigation-wrapper">
            <button type="button" class="btn btn-transparent nav-event-navigation-toggler nav-event-navigation-toggler-js">
                <img src="../../dist/img/dots.png" alt="event navigation">
            </button>
            <span class="event-navigation-text">Details</span>

            <button type="button" class="btn btn-transparent event-navigation-close event-navigation-close-js">
                <img src="../../dist/img/close_black_32.png" alt="event navigation close">
            </button>

            <div class="nav-event-navigation-holder">
                <ul class="nav nav-event-navigation d-flex justify-center">
                    <li class="complete"><a href="#">Basic Info</a> </li>
                    <li class="active"><a href="#">Details</a> </li>
                    <li><a href="#">Tickets</a> </li>
                    <li><a href="#">Publish</a> </li>
                </ul>
            </div>

            <div class="nav-right">
                <a href="javascript:void(0)" class="btn btn-outline2" data-toggle="modal" data-target="#preview-event"><img src="../../dist/img/preview.png" class="mr-5" alt="publish"> Preview Event</a>
            </div>
        </div>

        <!-- Main content -->
        <section class="content content-box">

            <div class="box box-success mt-50">

                <div class="box-body">

                    <div class="form-wrapper v2 w-app pt-15 pb-30">

                        <!-- banner image -->
                        <div>
                            <div class="form-section-head">
                                <h2 class="m-0 mb-10">Main Banner Image</h2>
                                <p>82% of attendees prefer main event images that show an event's vibe and atmosphere.</p>
                            </div>

                            <div class="form-group">
                                <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" enctype="multipart/form-data">
                                    <div class="file-uploader-wrapper">
                                        <input type="file"
                                               name="CoverImage"
                                               class="file-uploader image-input dropify"
                                               data-url="avatar.png"
                                               id="image-input">
                                    </div>
                                    <input type="file" id="image-file" name="ImageTest" class="image-url" value="">
                                    <input type="submit" name="submit" value="submit" class="btn btn-primary">
                                </form>
                                <div>
                                    <ul class="d-sm-flex justify-space-between pt-4 pl-15">
                                        <li class="text-small text-info">Recommended image size: 2160 x 1080px</li>
                                        <li class="text-small text-info">Maximum file size: 10MB</li>
                                        <li class="text-small text-info">Supported image files: JPEG or PNG</li>
                                    </ul>
                                </div>
                                <pre>
                                    <?php
                                    var_dump($_FILES);
                                    if(isset($_POST['submit'])):
                                        $tmp_name = $_FILES["ImageTest"]["tmp_name"];
                                        // basename() may prevent filesystem traversal attacks;
                                        // further validation/sanitation of the filename may be appropriate
                                        $name = basename($_FILES["ImageTest"]["name"]);
                                        move_uploaded_file($tmp_name, "upload/$name");
                                    endif;
                                    ?>
                                </pre>
                            </div>
                        </div>

                        <!-- summary -->
                        <div>
                            <hr>
                            <div class="form-section-head">
                                <h2 class="m-0 mb-10">Summary</h2>
                                <p>Grab people's attention with a short description about your event. Attendees will see this at the top of your event page.</p>
                            </div>

                            <div class="form-group">
                                <textarea class="form-control" rows="4"></textarea>
                                <p class="text-small text-info text-right">140 characters max <span>(0/140)</span></p>
                            </div>
                        </div>

                        <!-- text editor -->
                        <div class="">
                            <hr>
                            <h2 class="m-0 mb-10">Description</h2>
                            <p>Add more details to your event like your schedule, sponsors, or featured guests.</p>
                            <div class="form-group">
                                <textarea id="editor"></textarea>
                            </div>
                        </div>

                        <div class="form-wrapper-foot pt-15">
                            <hr class="hr-2">
                            <div class="text-right button-group">
                                <button type="button" class="btn btn-default btn-lg mr-15">Discard</button>
                                <a href="create-event-ticket.html" class="btn btn-success btn-lg">Next</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- modal -->
            <div id="preview-event" class="modal">
                <!-- 'modal-sm' class is needed to change the width of the modal -->
                <div class="modal-dialog modal-full modal-preview">
                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title text-center">Preview Event</h3>
                        </div>
                        <!-- modal close button -->
                        <button type="button" class="close close-modal" data-dismiss="modal">
                            <svg aria-hidden="true" class="icon-svg-close" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>

                        <div class="modal-body">
                            <div class="preview-close-wrap">
                                <button type="button" class="btn btn-transparent" data-dismiss="modal">
                                    Close Preview
                                </button>
                            </div>
                            <div class="preview-wrapper pt-30">
                                <ul class="nav preview-nav text-center d-none d-md-flex">
                                   <li class="nav-item active"><a href="javascript:void(0)" class="desktop-preview-js">Desktop View</a> </li>
                                   <li class="nav-item"><a href="javascript:void(0)" class="mobile-preview-js">Mobile View</a></li>
                                </ul>

                                <div class="preview-holder">
                                    <iframe src="https://secure-api.net/event/registration/alamine-academy/field-trip-bowling" height="1632px" width="100%" title="Iframe Example"></iframe>
                                </div>
                            </div>
                        </div>

                        <div class="preview-close-wrap bottom">
                            <button type="button" class="btn btn-transparent" data-dismiss="modal">
                                Close Preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
        <!-- To the right -->
        <div class="pull-right BigBold-SubTitle">
            <a href="mailto:Support@MasjidSolutions.Net">Support@MasjidSolutions.Net</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="tel:+13178540207">(317) 854-0207</a>
        </div>
        <!-- Default to the left -->
        <strong>Copyright © 2022 <a target="_blank" href="https://MasjidSolutions.Net">Masjid Solutions</a>.</strong> All rights reserved.
    </footer>
</div>
<!-- ./wrapper -->

<!-- jQuery 2.2.3 -->
<script src="../../plugins/jQuery/jquery-2.2.3.min.js"></script>
<!-- Bootstrap 3.3.6 -->
<script src="../../plugins/bootstrap/js/bootstrap.min.js"></script>
<!-- Select2 -->
<script src="../../plugins/select2/select2.full.min.js"></script>
<!-- iCheck -->
<script src="../../plugins/iCheck/icheck.min.js"></script>
<!-- datepicker -->
<script src="../../plugins/datepicker/bootstrap-datepicker.js"></script>
<!-- dropify -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Dropify/0.2.2/js/dropify.min.js" integrity="sha512-8QFTrG0oeOiyWo/VM9Y8kgxdlCryqhIxVeRpWSezdRRAvarxVtwLnGroJgnVW9/XBRduxO/z1GblzPrMQoeuew==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<!-- CK EDITOR -->
<script src="https://cdn.ckeditor.com/ckeditor5/31.0.0/classic/ckeditor.js"></script>
<!-- SlimScroll -->
<script src="../../plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- AdminLTE App -->
<script src="../../dist/js/app.js"></script>
<!-- custom script -->
<script src="../../dist/js/custom_script.js?v=1.0.9"></script>

<!-- ck editor -->
<script>
  if($('#editor').length>0){
    ClassicEditor
      .create(document.querySelector('#editor'), {
        toolbar: {
          items: [
            'heading', '|',
            'fontfamily', 'fontsize', '|',
            'alignment', '|',
            'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
            'link', '|',
            'bulletedList', 'numberedList', 'todoList', '|',
            'code', 'codeBlock', '|',
          ],
          shouldNotGroupWhenFull: true
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  function loadURLToInputFiled(url, filename, element){
    getImgURL(url, (imgBlob)=>{
      // Load img blob to input
      // WIP: UTF8 character error
      let file = new File([imgBlob], filename,{type:"", lastModified:new Date().getTime()}, 'utf-8');
      let container = new DataTransfer();
      container.items.add(file);
      $(element).files = container.files;

    })
  }
  // xmlHTTP return blob respond
  function getImgURL(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      callback(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  $('.file-uploader').each(function (i, element){
    if($(element).attr('data-url') && $(element).attr('data-url')!==''){
      loadURLToInputFiled($(element).attr('data-url'), 'avatar.png', element);
    }
  })
</script>


</body>
</html>
