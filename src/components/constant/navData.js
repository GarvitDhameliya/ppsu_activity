const studentNavMainData = {
    studentNavData: [
        { label: 'Home', link: '/', icon: 'bx bxs-home' },
        { label: 'Help', link: '/help', icon: 'bx bx-help-circle' },
        { label: 'Profile', link: '/profile', icon: 'bx bx-user' },
    ],
    role: "student"
}


const facultyNavMainData = {
    facultyNavData: [
        { label: 'Home', link: '/', icon: 'bx bxs-home' },
        { label: 'Help', link: '/help', icon: 'bx bx-help-circle' },
        { label: 'Profile', link: '/profile', icon: 'bx bx-user' },
    ],
    role: "faculty"
}

const subAdminNavMainData = {
    subAdminNavData: [
        { label: 'Home', link: '/', icon: 'bx bxs-home' },
        { label: 'Search', link: '/search', icon: 'bx bx-search' },
        { label: 'Approvals', link: '/activity', icon: 'bx bxs-user-detail' },
        // { label: 'History', link: '/apc/history', icon: 'bx bx-history' },
        { label: 'Governance', link: '/governance', icon: 'bx bx-user-plus' },
        { label: 'Help', link: '/help', icon: 'bx bx-help-circle' },
        { label: 'Profile', link: '/profile', icon: 'bx bx-user' },
    ],
    role: "apc"
}
// InstaAdmin
const adminNavMainData = {
    adminNavData: [
        { label: 'Home', link: '/', icon: 'bx bxs-home' },
        { label: 'Search', link: '/search', icon: 'bx bx-search' },
        { label: 'Report', link: '/activity', icon: 'bx bxs-user-detail' },
        { label: 'Governance', link: '/governance', icon: 'bx bx-list-check' },
        { label: 'Help', link: '/help', icon: 'bx bx-help-circle' },
        { label: 'Profile', link: '/profile', icon: 'bx bx-user' },
    ],
    role: "admin"
}

// Coe
const masterNavMainData = {
    masterNavData: [
        { label: 'Home', link: '/', icon: 'bx bxs-home' },
        { label: 'Search', link: '/search', icon: 'bx bx-search' },
        { label: 'Schools', link: '/schools', icon: 'bx bxs-school' },
        { label: 'Governance', link: '/governance', icon: 'bx bx-list-check' },
        { label: 'Help', link: '/help', icon: 'bx bx-help-circle' },
        { label: 'Profile', link: '/profile', icon: 'bx bx-user' },
    ],
    role: "coe"
}

export { studentNavMainData, facultyNavMainData, subAdminNavMainData, adminNavMainData, masterNavMainData }

