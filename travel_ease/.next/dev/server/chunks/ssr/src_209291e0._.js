module.exports = [
"[project]/src/data/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cities",
    ()=>cities,
    "featuredTrips",
    ()=>featuredTrips,
    "mockFlights",
    ()=>mockFlights,
    "mockHotels",
    ()=>mockHotels
]);
const mockFlights = [
    {
        id: 'fl-001',
        airline: 'IndiGo',
        from: 'Delhi',
        to: 'Mumbai',
        departureTime: '06:00',
        arrivalTime: '08:15',
        duration: '2h 15m',
        price: 4500,
        stops: 0,
        cabinClass: 'Economy'
    },
    {
        id: 'fl-002',
        airline: 'Air India',
        from: 'Delhi',
        to: 'Mumbai',
        departureTime: '09:30',
        arrivalTime: '11:45',
        duration: '2h 15m',
        price: 5200,
        stops: 0,
        cabinClass: 'Economy'
    },
    {
        id: 'fl-003',
        airline: 'SpiceJet',
        from: 'Delhi',
        to: 'Mumbai',
        departureTime: '12:00',
        arrivalTime: '14:30',
        duration: '2h 30m',
        price: 3800,
        stops: 0,
        cabinClass: 'Economy'
    },
    {
        id: 'fl-004',
        airline: 'Vistara',
        from: 'Delhi',
        to: 'Mumbai',
        departureTime: '14:00',
        arrivalTime: '16:20',
        duration: '2h 20m',
        price: 5800,
        stops: 0,
        cabinClass: 'Economy'
    },
    {
        id: 'fl-005',
        airline: 'Air Asia',
        from: 'Bangalore',
        to: 'Chennai',
        departureTime: '07:00',
        arrivalTime: '08:10',
        duration: '1h 10m',
        price: 2500,
        stops: 0,
        cabinClass: 'Economy'
    },
    {
        id: 'fl-006',
        airline: 'IndiGo',
        from: 'Bangalore',
        to: 'Chennai',
        departureTime: '10:30',
        arrivalTime: '11:45',
        duration: '1h 15m',
        price: 2800,
        stops: 0,
        cabinClass: 'Economy'
    },
    {
        id: 'fl-007',
        airline: 'Air India',
        from: 'Hyderabad',
        to: 'Goa',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: '1h 30m',
        price: 3500,
        stops: 0,
        cabinClass: 'Economy'
    },
    {
        id: 'fl-008',
        airline: 'SpiceJet',
        from: 'Kolkata',
        to: 'Delhi',
        departureTime: '11:00',
        arrivalTime: '13:30',
        duration: '2h 30m',
        price: 4200,
        stops: 0,
        cabinClass: 'Economy'
    },
    {
        id: 'fl-009',
        airline: 'Vistara',
        from: 'Mumbai',
        to: 'Dubai',
        departureTime: '15:00',
        arrivalTime: '18:30',
        duration: '3h 30m',
        price: 12000,
        stops: 0,
        cabinClass: 'Economy'
    },
    {
        id: 'fl-010',
        airline: 'Air India',
        from: 'Delhi',
        to: 'Singapore',
        departureTime: '22:00',
        arrivalTime: '06:30',
        duration: '5h 30m',
        price: 15000,
        stops: 0,
        cabinClass: 'Economy'
    }
];
const mockHotels = [
    {
        id: 'ht-001',
        name: 'Taj Palace Hotel',
        location: 'Mumbai',
        price: 8500,
        rating: 4.8,
        amenities: [
            'Free WiFi',
            'Pool',
            'Spa',
            'Restaurant',
            'Gym',
            'Parking'
        ],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
        description: 'Luxury hotel in the heart of Mumbai with stunning views'
    },
    {
        id: 'ht-002',
        name: 'The Leela Palace',
        location: 'Delhi',
        price: 12000,
        rating: 4.9,
        amenities: [
            'Free WiFi',
            'Pool',
            'Spa',
            'Restaurant',
            'Gym',
            'Butler Service'
        ],
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
        description: 'Grand palace hotel with royal amenities'
    },
    {
        id: 'ht-003',
        name: 'Beach Resort Goa',
        location: 'Goa',
        price: 5500,
        rating: 4.5,
        amenities: [
            'Free WiFi',
            'Beach Access',
            'Pool',
            'Restaurant',
            'Bar'
        ],
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
        description: 'Beachfront resort with tropical paradise views'
    },
    {
        id: 'ht-004',
        name: 'ITC Grand Chola',
        location: 'Chennai',
        price: 9500,
        rating: 4.7,
        amenities: [
            'Free WiFi',
            'Pool',
            'Spa',
            'Multiple Restaurants',
            'Gym'
        ],
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
        description: 'Luxury stay in the city of Chennai'
    },
    {
        id: 'ht-005',
        name: 'Radisson Blu',
        location: 'Bangalore',
        price: 6500,
        rating: 4.4,
        amenities: [
            'Free WiFi',
            'Pool',
            'Restaurant',
            'Gym',
            'Business Center'
        ],
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
        description: 'Modern hotel in the tech hub of India'
    },
    {
        id: 'ht-006',
        name: 'Hyatt Regency',
        location: 'Hyderabad',
        price: 7200,
        rating: 4.6,
        amenities: [
            'Free WiFi',
            'Pool',
            'Spa',
            'Restaurant',
            'Gym',
            'Concierge'
        ],
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
        description: 'Contemporary hotel in the city of pearls'
    },
    {
        id: 'ht-007',
        name: 'JW Marriott',
        location: 'Kolkata',
        price: 7800,
        rating: 4.5,
        amenities: [
            'Free WiFi',
            'Pool',
            'Spa',
            'Multiple Restaurants',
            'Gym'
        ],
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
        description: 'Premium accommodation in Kolkata'
    },
    {
        id: 'ht-008',
        name: 'Club Mahindra',
        location: 'Goa',
        price: 4500,
        rating: 4.3,
        amenities: [
            'Free WiFi',
            'Pool',
            'Restaurant',
            'Kids Play Area',
            'Garden'
        ],
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
        description: 'Family-friendly resort in beautiful Goa'
    }
];
const featuredTrips = [
    {
        id: 'ft-001',
        name: 'Goa Beach Escape',
        description: '3 nights, 4 days of sun, sand, and relaxation at the most beautiful beaches of Goa. Includes beachside accommodation and guided tours.',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        duration: '3N / 4D'
    },
    {
        id: 'ft-002',
        name: 'Dubai Luxury Tour',
        description: 'Experience the glitz and glamour of Dubai with 4 nights of luxury. Visit Burj Khalifa, Desert Safari, and more.',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        duration: '4N / 5D'
    },
    {
        id: 'ft-003',
        name: 'Bali Honeymoon',
        description: 'Romantic 5-night escape to Bali with private pool villas, candlelight dinners, and spa treatments.',
        price: 55000,
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
        duration: '5N / 6D'
    },
    {
        id: 'ft-004',
        name: 'Kashmir Paradise',
        description: 'Discover the heaven on earth with 4 nights in Srinagar, Gulmarg, and Pahalgam. Houseboat stay included.',
        price: 35000,
        image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800',
        duration: '4N / 5D'
    },
    {
        id: 'ft-005',
        name: 'Andaman Adventure',
        description: 'Explore the pristine beaches and crystal-clear waters of Andaman Islands. 5 nights of adventure and relaxation.',
        price: 42000,
        image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800',
        duration: '5N / 6D'
    },
    {
        id: 'ft-006',
        name: 'Rajasthan Heritage',
        description: 'Immerse yourself in the royal heritage of Rajasthan. Visit Jaipur, Udaipur, and Jaisalmer with palace stays.',
        price: 38000,
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800',
        duration: '5N / 6D'
    }
];
const cities = [
    'Delhi',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Hyderabad',
    'Kolkata',
    'Goa',
    'Jaipur',
    'Pune',
    'Ahmedabad',
    'Dubai',
    'Singapore',
    'Bali',
    'Bangkok',
    'Kathmandu'
];
}),
"[project]/src/app/flights/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FlightsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function FlightsSearchContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(searchParams.get('from') || '');
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(searchParams.get('to') || '');
    const [departureDate, setDepartureDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(searchParams.get('departureDate') || '');
    const [returnDate, setReturnDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(searchParams.get('returnDate') || '');
    const [travelers, setTravelers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(parseInt(searchParams.get('travelers') || '1'));
    const [cabinClass, setCabinClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(searchParams.get('cabinClass') || 'Economy');
    const handleSearch = (e)=>{
        e.preventDefault();
        const params = new URLSearchParams({
            from,
            to,
            departureDate,
            returnDate,
            travelers: travelers.toString(),
            cabinClass
        });
        router.push(`/flights?${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-8 text-center",
                    children: "Search Flights"
                }, void 0, false, {
                    fileName: "[project]/src/app/flights/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSearch,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "From"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: from,
                                                onChange: (e)=>setFrom(e.target.value),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/flights/page.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cities"].map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: city,
                                                            children: city
                                                        }, city, false, {
                                                            fileName: "[project]/src/app/flights/page.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/flights/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "To"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: to,
                                                onChange: (e)=>setTo(e.target.value),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                                                required: true,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/flights/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cities"].map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: city,
                                                            children: city
                                                        }, city, false, {
                                                            fileName: "[project]/src/app/flights/page.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/flights/page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Departure Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: departureDate,
                                                onChange: (e)=>setDepartureDate(e.target.value),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/flights/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Return Date (Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: returnDate,
                                                onChange: (e)=>setReturnDate(e.target.value),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/flights/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Travelers"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "1",
                                                max: "9",
                                                value: travelers,
                                                onChange: (e)=>setTravelers(parseInt(e.target.value)),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/flights/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Cabin Class"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: cabinClass,
                                                onChange: (e)=>setCabinClass(e.target.value),
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Economy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/flights/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Premium Economy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/flights/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Business"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/flights/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "First Class"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/flights/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/flights/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/flights/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/flights/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full mt-6 btn-primary py-3 text-lg",
                                children: "Search Flights"
                            }, void 0, false, {
                                fileName: "[project]/src/app/flights/page.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/flights/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/flights/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/flights/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/flights/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function FlightsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-8 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/flights/page.tsx",
            lineNumber: 129,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FlightsSearchContent, {}, void 0, false, {
            fileName: "[project]/src/app/flights/page.tsx",
            lineNumber: 130,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/flights/page.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_209291e0._.js.map