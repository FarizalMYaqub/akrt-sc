"use client"

import { useState } from "react"
import { ScrambleText } from "@/components/scramble-text"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const truckData = {
  "Road Train": [
    {
      name: "Blackpink",
      image: "https://iili.io/fVKEtDv.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Captain America",
      image: "https://iili.io/fVKGjXR.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Caterpillar",
      image: "https://iili.io/fVKMdBV.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "CDC",
      image: "https://iili.io/fVKMljf.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Chelsea",
      image: "https://iili.io/fVKV0HF.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Chick Hicks",
      image: "https://iili.io/fVKVwlI.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Coca Cola",
      image: "https://iili.io/fVKVZOu.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Dinoco",
      image: "https://iili.io/fVKWKba.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Durex",
      image: "https://iili.io/fVKWRbs.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Emirates",
      image: "https://iili.io/fVKArYl.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "FC Barcelona",
      image: "https://iili.io/fVKWbkX.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "FedEx",
      image: "https://iili.io/fVKXfY7.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "FedEx V2",
      image: "https://iili.io/fVKX5YP.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Free Fire",
      image: "https://iili.io/fVKXjyX.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "GeoGuessr",
      image: "https://iili.io/fVKXy8P.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Google",
      image: "https://iili.io/fVKhal2.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Heineken",
      image: "https://iili.io/fVKhriv.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Hello Kitty",
      image: "https://iili.io/fVKj1gp.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Hudson Hornet",
      image: "https://iili.io/fVKjkrl.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "IKEA",
      image: "https://iili.io/fVKjyTF.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Interpol",
      image: "https://iili.io/fVKw5a2.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "JKT48",
      image: "https://iili.io/fVKwECb.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Liverpool",
      image: "https://iili.io/fVKwiut.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Los Angeles Lakers",
      image: "https://iili.io/fVKN6fj.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Manchester United",
      image: "https://iili.io/fVKNfPj.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Marlboro",
      image: "https://iili.io/fVKeICg.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "McQueen",
      image: "https://iili.io/fVKkAx9.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "McQueen V2",
      image: "https://iili.io/fVKkEOB.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Monster Energy",
      image: "https://iili.io/fVKkbz7.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Monsters Inc",
      image: "https://iili.io/fVKvPQ1.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Nailong",
      image: "https://iili.io/fVK8qv4.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "National Geographic",
      image: "https://iili.io/fVK8OwN.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Netflix",
      image: "https://iili.io/fVKSKV1.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Oreo",
      image: "https://iili.io/fVKU7IV.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Pertamina",
      image: "https://iili.io/fVKUhIp.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Petronas",
      image: "https://iili.io/fVKgHZB.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Phub",
      image: "https://iili.io/fVKgnuR.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Phub V2",
      image: "https://iili.io/fVKg78G.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "PlayStation",
      image: "https://iili.io/fVKgZoN.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Pokemon",
      image: "https://iili.io/fVKrBf9.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Real Madrid",
      image: "https://iili.io/fVKrrsS.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Rockstar",
      image: "https://iili.io/fVK4qIR.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Spider-Man",
      image: "https://iili.io/fVK4zrX.jpg",
      specs: "2 Upgrades: Engine & Body\n0 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Spider-Man Miles Morales",
      image: "https://iili.io/fVK47I4.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Spider-Man Gwen",
      image: "https://iili.io/fVK4wQV.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Spotify",
      image: "https://iili.io/fVK6owx.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "Sprite",
      image: "https://iili.io/fVK6u6P.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "US Army",
      image: "https://iili.io/fVKPfiN.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
    {
      name: "WhatsApp",
      image: "https://iili.io/fVKPUzv.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$8,500",
    },
  ],
  Benson: [
    {
      name: "Balenciaga",
      image: "https://iili.io/fVqiTv9.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqPbLv.png"],
    },
    {
      name: "BMW Motorsport",
      image: "https://iili.io/fVqiWTg.jpg",
      specs: "2 Upgrades: Engine & Body\n1 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "DOPS Parfume",
      image: "https://iili.io/fVqL3WG.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqiZaS.png"],
    },
    {
      name: "FedEx",
      image: "https://iili.io/fVqLuWb.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "JKT48",
      image: "https://iili.io/fVqL6rl.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Kata Kata",
      image: "https://iili.io/fVqQMy7.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqQJ2V.png"],
    },
    {
      name: "Kata Kata V2",
      image: "https://iili.io/fVqZ1Va.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqZHns.png"],
    },
    {
      name: "Logistic x PRO7",
      image: "https://iili.io/fVqto5N.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqZDfj.png"],
    },
    {
      name: "McQueen",
      image: "https://iili.io/fVqtcdl.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Monster Energy",
      image: "https://iili.io/fVqtkmP.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Monster Inc",
      image: "https://iili.io/fVqDfj9.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqtDhX.jpg"],
    },
    {
      name: "Pikachu",
      image: "https://iili.io/fVqDguS.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqD13v.jpg", "https://iili.io/fVqDb9V.jpg"],
    },
    {
      name: "Pornhub",
      image: "https://iili.io/fVqbBAN.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Spider-Gwen",
      image: "https://iili.io/fVqp5jS.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqmkp2.png"],
    },
    {
      name: "Spider-Man",
      image: "https://iili.io/fVqptSf.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Spotify",
      image: "https://iili.io/fVqy0xI.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Toystory",
      image: "https://iili.io/fVBH2vj.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVB9Yru.png"],
    },
    {
      name: "U.S ARMY",
      image: "https://iili.io/fVBJWUg.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVBH88b.png"],
    },
  ],
  "Tow Truck": [
    {
      name: "Initial D",
      image: "https://iili.io/fVq8d6F.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left.",
      price: "$3,250",
    },
    {
      name: "JKT48",
      image: "https://iili.io/fVq8R8G.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left.",
      price: "$3,250",
    },
    {
      name: "Monster",
      image: "https://iili.io/fVq8vP1.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nGreen Spotlight on the right and left",
      price: "$3,250",
    },
    {
      name: "Monster V1",
      image: "https://iili.io/fVq8ZPt.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nGreen Spotlight on the right and left",
      price: "$3,250",
    },
    {
      name: "National Geographic",
      image: "https://iili.io/fVqSBUu.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,250",
    },
    {
      name: "Solidarity Forever",
      image: "https://iili.io/fVqSLej.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,250",
    },
  ],
Sadler: [
    {
      name: "Alienware",
      image: "https://iili.io/fVC9KP9.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, White Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "BlackPink",
      image: "https://iili.io/fVCHSkJ.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "BMW Motorsport",
      image: "https://iili.io/fVCJ249.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "BMW Motorsport V2",
      image: "https://iili.io/fVCJUF9.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right and left.",
      price: "$3,475",
    },
    {
      name: "Caterpillar",
      image: "https://iili.io/fVCdVVV.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nWhite Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Champion",
      image: "https://iili.io/fVCd6lt.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "COLT L300",
      image: "https://iili.io/fVC2qWQ.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "Dinoco",
      image: "https://iili.io/fVC2cqN.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, White Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "DOPS PARFUME",
      image: "https://iili.io/fVC3mc7.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "Farmer ENTH",
      image: "https://iili.io/fVCFeRe.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nGreen Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Farmer ENTH V2",
      image: "https://iili.io/fVCFRPp.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "FF MAX",
      image: "https://iili.io/fVCK7Xj.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "GunsLinger",
      image: "https://iili.io/fVCKG71.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "Hello Kitty",
      image: "https://iili.io/fVCKsEl.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "Initial D",
      image: "https://iili.io/fVCKpTu.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "McQueen",
      image: "https://iili.io/fVCfCTg.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Monster Energy",
      image: "https://iili.io/fVCqUWG.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "National Geographic",
      image: "https://iili.io/fVINqjj.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "National Geographic V2",
      image: "https://iili.io/fVCBv2V.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "Nuclear",
      image: "https://iili.io/fVCxNwP.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nWhite Spotlight on the right and left.",
      price: "$3,475",
    },
    {
      name: "One Piece",
      image: "https://iili.io/fVCxZVn.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Pepsi",
      image: "https://iili.io/fVCzqKb.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "Pikachu",
      image: "https://iili.io/fVz67Ve.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Pornhub",
      image: "https://iili.io/fVCYZVp.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "Spider-Man",
      image: "https://iili.io/fVCcd21.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "STIHL",
      image: "https://iili.io/fVCclG2.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
    {
      name: "TDR Racing",
      image: "https://iili.io/fVCclG2.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "The Fast And The Furious",
      image: "https://iili.io/fVCWodl.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left.",
      price: "$3,475",
    },
  ],
  Benson: [
    {
      name: "Alienware",
      image: "https://iili.io/fVC9KP9.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "BlackPink",
      image: "https://iili.io/fVCHSkJ.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "BMW Motorsport",
      image: "https://iili.io/fVCJ249.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "BMW Motorsport V2",
      image: "https://iili.io/fVCJUF9.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Caterpillar",
      image: "https://iili.io/fVCdVVV.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Champion",
      image: "https://iili.io/fVCd6lt.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "COLT L300",
      image: "https://iili.io/fVC2qWQ.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Dinoco",
      image: "https://iili.io/fVC2cqN.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "DOPS",
      image: "https://iili.io/fVC3mc7.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Farmer ENTH",
      image: "https://iili.io/fVCFeRe.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Farmer ENTH V2",
      image: "https://iili.io/fVCFRPp.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "FF MAX",
      image: "https://iili.io/fVCK7Xj.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Guns Linger",
      image: "https://iili.io/fVCKG71.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Hello Kitty",
      image: "https://iili.io/fVCKsEl.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Initial D",
      image: "https://iili.io/fVCKpTu.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "McQueen",
      image: "https://iili.io/fVCfCTg.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Monster Energy",
      image: "https://iili.io/fVCqUWG.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "National Geographic",
      image: "https://iili.io/fVCqUWG.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "National Geographic V2",
      image: "https://iili.io/fVCBv2V.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Nuclear",
      image: "https://iili.io/fVCxNwP.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "One Piece",
      image: "https://iili.io/fVCxZVn.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Pepsi",
      image: "https://iili.io/fVCzqKb.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Pikachu",
      image: "https://iili.io/fVCzqKb.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Pornhub",
      image: "https://iili.io/fVCYZVp.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "Spider-Man",
      image: "https://iili.io/fVCcd21.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "STIHL",
      image: "https://iili.io/fVCclG2.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "TDR Racing",
      image: "https://iili.io/fVCclG2.jpg",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
    {
      name: "The Fast And The Furious",
      image: "https://iili.io/fVCWodl.png",
      specs: "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left",
      price: "$3,475",
    },
  ],
  Benson: [
    {
      name: "Balenciaga",
      image: "https://iili.io/fVqiTv9.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqPbLv.png"],
    },
    {
      name: "BMW Motorsport",
      image: "https://iili.io/fVqiWTg.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "DOPS Parfume",
      image: "https://iili.io/fVqL3WG.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqiZaS.png"],
    },
    {
      name: "FedEx",
      image: "https://iili.io/fVqLuWb.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "JKT48",
      image: "https://iili.io/fVqL6rl.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Kata Kata",
      image: "https://iili.io/fVqQMy7.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqQJ2V.png"],
    },
    {
      name: "Kata Kata V2",
      image: "https://iili.io/fVqZ1Va.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqZHns.png"],
    },
    {
      name: "Logistic x PRO7",
      image: "https://iili.io/fVqto5N.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqZDfj.png"],
    },
    {
      name: "McQueen",
      image: "https://iili.io/fVqtcdl.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Monster Energy",
      image: "https://iili.io/fVqtkmP.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Monster Inc",
      image: "https://iili.io/fVqDfj9.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqtDhX.jpg"],
    },
    {
      name: "Pikachu",
      image: "https://iili.io/fVqDguS.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqD13v.jpg", "https://iili.io/fVqDb9V.jpg"],
    },
    {
      name: "Pornhub",
      image: "https://iili.io/fVqbBAN.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Spider-Gwen",
      image: "https://iili.io/fVqp5jS.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVqmkp2.png"],
    },
    {
      name: "Spider-Man",
      image: "https://iili.io/fVqptSf.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Spotify",
      image: "https://iili.io/fVqy0xI.jpg",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
    },
    {
      name: "Toystory",
      image: "https://iili.io/fVBH2vj.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVB9Yru.png"],
    },
    {
      name: "U.S ARMY",
      image: "https://iili.io/fVBJWUg.png",
      specs: "2 Upgrades: Engine & Body\n2 Spotlight\nN20 x2",
      price: "$3,625",
      gallery: ["https://iili.io/fVBH88b.png"],
    },
  ],
  Taxi: [
    {
      name: "Fake Taxi",
      image: "https://iili.io/fVI4Gse.jpg",
      specs:
        "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left",
      price: "$4,000",
    },
    {
      name: "Initial D",
      image: "https://iili.io/fVI46dv.jpg",
      specs:
        "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left.",
      price: "$4,000",
    },
    {
      name: "National Geographic",
      image: "https://iili.io/fVI6o2j.jpg",
      specs:
        "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left",
      price: "$4,000",
    },
    {
      name: "Pikachu",
      image: "https://iili.io/fVI6s3b.jpg",
      specs:
        "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on the right and left.",
      price: "$4,000",
    },
    {
      name: "Pornhub",
      image: "https://iili.io/fVIPnnt.jpg",
      specs:
        "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nWhite Spotlight on the right and left.",
      price: "$4,000",
    },
    {
      name: "Taxi Driver",
      image: "https://iili.io/fVIPYtS.jpg",
      specs:
        "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left",
      price: "$4,000",
    },
    {
      name: "The Fast And The Furious",
      image: "https://iili.io/fVIPjDB.jpg",
      specs:
        "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right, Red Spotlight on the left",
      price: "$4,000",
    },
    {
      name: "The Godfather",
      image: "https://iili.io/fVIPLiX.jpg",
      specs:
        "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nRed Spotlight on top center.",
      price: "$4,000",
    },
    {
      name: "Toystory",
      image: "https://iili.io/fVIiGst.jpg",
      specs:
        "2 Upgrades: Engine & Body\nNitrous Oxide X2 (N20 X2)\nBlue Spotlight on the right and left.",
      price: "$4,000",
    },
  ],
}

type Truck = {
  name: string
  image: string
  specs: string
  price: string
}

export function TruckCatalogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Road Train")
  const [selectedTruck, setSelectedTruck] = useState<Truck | null>(null)

  const categories = Object.keys(truckData)
  const filteredTrucks = truckData[selectedCategory as keyof typeof truckData] || []

  return (
    <section className="min-h-screen bg-background px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 font-mono text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
          <ScrambleText text="AUTOMOTIVE CATALOG" />
        </h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "border border-border bg-card px-4 py-2 font-mono text-sm uppercase transition-colors",
                selectedCategory === category
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredTrucks.map((truck, index) => (
            <button
              key={index}
              onClick={() => setSelectedTruck(truck)}
              className="group relative overflow-hidden border border-border bg-card text-left transition-colors hover:border-foreground"
            >
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={truck.image || "/placeholder.svg"}
                  alt={truck.name}
                  crossOrigin="anonymous"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-border p-3">
                <h3 className="font-mono text-sm font-medium text-foreground">{truck.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{selectedCategory}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedTruck} onOpenChange={() => setSelectedTruck(null)}>
        <DialogContent className="max-w-2xl border-border bg-card">
          <DialogHeader>
            <DialogTitle className="font-mono text-xl uppercase tracking-wider">{selectedTruck?.name}</DialogTitle>
          </DialogHeader>
          {selectedTruck && (
            <div className="space-y-4">
              <div className="overflow-hidden border border-border bg-muted">
                <img
                  src={selectedTruck.image || "/placeholder.svg"}
                  alt={selectedTruck.name}
                  crossOrigin="anonymous"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="border-l-2 border-foreground pl-3">
                  <p className="font-mono text-xs uppercase text-muted-foreground">Specifications</p>
                  <pre className="mt-1 whitespace-pre-wrap font-mono text-sm text-foreground">
                    {selectedTruck.specs}
                  </pre>
                </div>
                <div className="border-l-2 border-foreground pl-3">
                  <p className="font-mono text-xs uppercase text-muted-foreground">Price</p>
                  <p className="mt-1 font-mono text-xl font-bold text-foreground">{selectedTruck.price}</p>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-foreground font-mono uppercase text-background hover:bg-foreground/90"
              >
                <a href="https://bit.ly/AKRTInc" target="_blank" rel="noopener noreferrer">
                  Pesan Sekarang
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
