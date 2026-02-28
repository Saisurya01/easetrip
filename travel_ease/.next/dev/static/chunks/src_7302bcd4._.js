(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/featured-trips/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedTripsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function FeaturedTripsContent() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const tripId = searchParams.get('trip');
    const selectedTrip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FeaturedTripsContent.useMemo[selectedTrip]": ()=>{
            if (tripId) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featuredTrips"].find({
                    "FeaturedTripsContent.useMemo[selectedTrip]": (t)=>t.id === tripId
                }["FeaturedTripsContent.useMemo[selectedTrip]"]);
            }
            return null;
        }
    }["FeaturedTripsContent.useMemo[selectedTrip]"], [
        tripId
    ]);
    if (selectedTrip) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl shadow-lg overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: selectedTrip.image,
                                    alt: selectedTrip.name,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/featured-trips/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium",
                                    children: selectedTrip.duration
                                }, void 0, false, {
                                    fileName: "[project]/src/app/featured-trips/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/featured-trips/page.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-gray-900 mb-4",
                                    children: selectedTrip.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/featured-trips/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 mb-6",
                                    children: selectedTrip.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/featured-trips/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500",
                                                        children: "Starting from"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/featured-trips/page.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-primary-600",
                                                        children: [
                                                            "₹",
                                                            selectedTrip.price.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/featured-trips/page.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm",
                                                        children: "per person"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/featured-trips/page.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/featured-trips/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-primary py-3 px-8 text-lg",
                                                children: "Book Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/featured-trips/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/featured-trips/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/featured-trips/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/featured-trips/page.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/featured-trips/page.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/featured-trips/page.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/featured-trips/page.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-8 text-center",
                    children: "Featured Trips"
                }, void 0, false, {
                    fileName: "[project]/src/app/featured-trips/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featuredTrips"].map((trip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-56",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: trip.image,
                                            alt: trip.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/featured-trips/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium",
                                            children: trip.duration
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/featured-trips/page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/featured-trips/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold text-gray-900 mb-2",
                                            children: trip.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/featured-trips/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 text-sm mb-4 line-clamp-2",
                                            children: trip.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/featured-trips/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl font-bold text-primary-600",
                                                            children: [
                                                                "₹",
                                                                trip.price.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/featured-trips/page.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500 text-sm",
                                                            children: " / person"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/featured-trips/page.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/featured-trips/page.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `/featured-trips?trip=${trip.id}`,
                                                    className: "btn-primary text-sm",
                                                    children: "View Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/featured-trips/page.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/featured-trips/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/featured-trips/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, trip.id, true, {
                            fileName: "[project]/src/app/featured-trips/page.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/featured-trips/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/featured-trips/page.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/featured-trips/page.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(FeaturedTripsContent, "szwNqijGNM76MoAKJ/QUgXlIfbw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = FeaturedTripsContent;
function FeaturedTripsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 py-8 text-center",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/featured-trips/page.tsx",
            lineNumber: 101,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedTripsContent, {}, void 0, false, {
            fileName: "[project]/src/app/featured-trips/page.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/featured-trips/page.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c1 = FeaturedTripsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "FeaturedTripsContent");
__turbopack_context__.k.register(_c1, "FeaturedTripsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7302bcd4._.js.map