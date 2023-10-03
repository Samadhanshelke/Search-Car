import {one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen} from '../Data'
const Products = [
    {
      "Name": "Toyota Camry",
      "LaunchYear": 2022,
      "SitCapacity": 5,
      "fuel": "Gasoline",
      "average": "6km/1 litre",
      "Type": "Automatic",
      "Price": 25000,
      "image": one
    },
    {
      "Name": "Honda Civic",
      "LaunchYear": 2021,
      "SitCapacity": 5,
      "fuel": "Gasoline",
      "average": "5.5km/1 litre",
      "Type": "Automatic",
      "Price": 23000,
      "image":two
    },
    {
      "Name": "Ford F-150",
      "LaunchYear": 2023,
      "SitCapacity": 6,
      "fuel": "Diesel",
      "average": "7km/1 litre",
      "Type": "Automatic",
      "Price": 35000,
      "image":three
    },
    {
        "Name": "Tesla Model 3",
        "LaunchYear": 2023,
        "SitCapacity": 5,
        "fuel": "Electric",
        "average": "5km/1 kWh",
        "Type": "Electric",
        "Price": 40000,
        "image":four
      },
      {
        "Name": "Chevrolet Silverado",
        "LaunchYear": 2023,
        "SitCapacity": 6,
        "fuel": "Gasoline",
        "average": "8km/1 litre",
        "Type": "Automatic",
        "Price": 34000,
        "image":five
      },
      {
        "Name": "Nissan Altima",
        "LaunchYear": 2022,
        "SitCapacity": 5,
        "fuel": "Gasoline",
        "average": "11km/1 litre",
        "Type": "Automatic",
        "Price": 27000,
        "image":six
      },
      {
        "Name": "BMW X5",
        "LaunchYear": 2023,
        "SitCapacity": 5,
        "fuel": "Diesel",
        "average": "9km/1 litre",
        "Type": "Automatic",
        "Price": 55000,
        "image":seven

      },
      {
        "Name": "Jeep Wrangler",
        "LaunchYear": 2022,
        "Type": "Manual",
        "SitCapacity": 5,
        "fuel": "Diesel",
        "Price": 33000,
        "image":eight,
        "average": "9km/1 litre",

      },
      {
        "Name": "Hyundai Sonata",
        "LaunchYear": 2022,
        "SitCapacity": 5,
        "fuel": "Hybrid",
        "average": "16km/1 litre",
        "Type": "Automatic",
        "Price": 29000,
        "image":nine

      },
      {
        "Name": "Volkswagen Golf",
        "LaunchYear": 2022,
        "SitCapacity": 5,
        "fuel": "Diesel",
        "average": "15km/1 litre",
        "Type": "Automatic",
        "Price": 27000,
        "image":ten

      },
      {
        "Name": "Audi Q5",
        "LaunchYear": 2023,
        "SitCapacity": 5,
        "fuel": "Diesel",
        "average": "14km/1 litre",
        "Type": "Automatic",
        "Price": 50000,
        "image":eleven

      },
      {
        "Name": "Kia Sportage",
        "LaunchYear": 2022,
        "SitCapacity": 5,
        "fuel": "Gasoline",
        "average": "11km/1 litre",
        "Type": "Automatic",
        "Price": 26000,
        "image":twelve

      },
      {
        "Name": "Lexus RX",
        "LaunchYear": 2023,
        "SitCapacity": 5,
        "fuel": "Hybrid",
        "average": "13km/1 litre",
        "Type": "Automatic",
        "Price": 48000,
        "image":thirteen

      },
      {
        "Name": "Subaru Outback",
        "LaunchYear": 2022,
        "SitCapacity": 5,
        "fuel": "Gasoline",
        "average": "10km/1 litre",
        "Type": "Automatic",
        "Price": 31000,
        "image":fourteen

      },
      {
        "Name": "Toyota Camry",
        "LaunchYear": 2022,
        "SitCapacity": 5,
        "fuel": "Gasoline",
        "average": "6km/1 litre",
        "Type": "Automatic",
        "Price": 25000,
        "image": one
      },
      {
        "Name": "Honda Civic",
        "LaunchYear": 2021,
        "SitCapacity": 5,
        "fuel": "Gasoline",
        "average": "5.5km/1 litre",
        "Type": "Automatic",
        "Price": 23000,
        "image":two
      },
      {
        "Name": "Ford F-150",
        "LaunchYear": 2023,
        "SitCapacity": 6,
        "fuel": "Diesel",
        "average": "7km/1 litre",
        "Type": "Automatic",
        "Price": 35000,
        "image":three
      },
      {
          "Name": "Tesla Model 3",
          "LaunchYear": 2023,
          "SitCapacity": 5,
          "fuel": "Electric",
          "average": "5km/1 kWh",
          "Type": "Electric",
          "Price": 40000,
          "image":four
        },
        {
          "Name": "Chevrolet Silverado",
          "LaunchYear": 2023,
          "SitCapacity": 6,
          "fuel": "Gasoline",
          "average": "8km/1 litre",
          "Type": "Automatic",
          "Price": 34000,
          "image":five
        },
        {
          "Name": "Nissan Altima",
          "LaunchYear": 2022,
          "SitCapacity": 5,
          "fuel": "Gasoline",
          "average": "11km/1 litre",
          "Type": "Automatic",
          "Price": 27000,
          "image":six
        },
        {
          "Name": "BMW X5",
          "LaunchYear": 2023,
          "SitCapacity": 5,
          "fuel": "Diesel",
          "average": "9km/1 litre",
          "Type": "Automatic",
          "Price": 55000,
          "image":seven
  
        },
        {
          "Name": "Jeep Wrangler",
          "LaunchYear": 2022,
          "Type": "Manual",
          "SitCapacity": 5,
          "fuel": "Diesel",
          "Price": 33000,
          "image":eight,
          "average": "9km/1 litre",
  
        },
        {
          "Name": "Hyundai Sonata",
          "LaunchYear": 2022,
          "SitCapacity": 5,
          "fuel": "Hybrid",
          "average": "16km/1 litre",
          "Type": "Automatic",
          "Price": 29000,
          "image":nine
  
        },
        {
          "Name": "Volkswagen Golf",
          "LaunchYear": 2022,
          "SitCapacity": 5,
          "fuel": "Diesel",
          "average": "15km/1 litre",
          "Type": "Automatic",
          "Price": 27000,
          "image":ten
  
        },
        {
          "Name": "Audi Q5",
          "LaunchYear": 2023,
          "SitCapacity": 5,
          "fuel": "Diesel",
          "average": "14km/1 litre",
          "Type": "Automatic",
          "Price": 50000,
          "image":eleven
  
        },
        {
          "Name": "Kia Sportage",
          "LaunchYear": 2022,
          "SitCapacity": 5,
          "fuel": "Gasoline",
          "average": "11km/1 litre",
          "Type": "Automatic",
          "Price": 26000,
          "image":twelve
  
        },
        {
          "Name": "Lexus RX",
          "LaunchYear": 2023,
          "SitCapacity": 5,
          "fuel": "Hybrid",
          "average": "13km/1 litre",
          "Type": "Automatic",
          "Price": 48000,
          "image":thirteen
  
        },
        {
          "Name": "Subaru Outback",
          "LaunchYear": 2022,
          "SitCapacity": 5,
          "fuel": "Gasoline",
          "average": "10km/1 litre",
          "Type": "Automatic",
          "Price": 31000,
          "image":fourteen
  
        },
        {
          "Name": "Toyota Camry",
          "LaunchYear": 2022,
          "SitCapacity": 5,
          "fuel": "Gasoline",
          "average": "6km/1 litre",
          "Type": "Automatic",
          "Price": 25000,
          "image": one
        },
        {
          "Name": "Honda Civic",
          "LaunchYear": 2021,
          "SitCapacity": 5,
          "fuel": "Gasoline",
          "average": "5.5km/1 litre",
          "Type": "Automatic",
          "Price": 23000,
          "image":two
        },
        {
          "Name": "Ford F-150",
          "LaunchYear": 2023,
          "SitCapacity": 6,
          "fuel": "Diesel",
          "average": "7km/1 litre",
          "Type": "Automatic",
          "Price": 35000,
          "image":three
        },
        {
            "Name": "Tesla Model 3",
            "LaunchYear": 2023,
            "SitCapacity": 5,
            "fuel": "Electric",
            "average": "5km/1 kWh",
            "Type": "Electric",
            "Price": 40000,
            "image":four
          },
          {
            "Name": "Chevrolet Silverado",
            "LaunchYear": 2023,
            "SitCapacity": 6,
            "fuel": "Gasoline",
            "average": "8km/1 litre",
            "Type": "Automatic",
            "Price": 34000,
            "image":five
          },
          {
            "Name": "Nissan Altima",
            "LaunchYear": 2022,
            "SitCapacity": 5,
            "fuel": "Gasoline",
            "average": "11km/1 litre",
            "Type": "Automatic",
            "Price": 27000,
            "image":six
          },
          {
            "Name": "BMW X5",
            "LaunchYear": 2023,
            "SitCapacity": 5,
            "fuel": "Diesel",
            "average": "9km/1 litre",
            "Type": "Automatic",
            "Price": 55000,
            "image":seven
    
          },
          {
            "Name": "Jeep Wrangler",
            "LaunchYear": 2022,
            "Type": "Manual",
            "SitCapacity": 5,
            "fuel": "Diesel",
            "Price": 33000,
            "image":eight,
            "average": "9km/1 litre",
    
          },
          {
            "Name": "Hyundai Sonata",
            "LaunchYear": 2022,
            "SitCapacity": 5,
            "fuel": "Hybrid",
            "average": "16km/1 litre",
            "Type": "Automatic",
            "Price": 29000,
            "image":nine
    
          },
          {
            "Name": "Volkswagen Golf",
            "LaunchYear": 2022,
            "SitCapacity": 5,
            "fuel": "Diesel",
            "average": "15km/1 litre",
            "Type": "Automatic",
            "Price": 27000,
            "image":ten
    
          },
          {
            "Name": "Audi Q5",
            "LaunchYear": 2023,
            "SitCapacity": 5,
            "fuel": "Diesel",
            "average": "14km/1 litre",
            "Type": "Automatic",
            "Price": 50000,
            "image":eleven
    
          },
          {
            "Name": "Kia Sportage",
            "LaunchYear": 2022,
            "SitCapacity": 5,
            "fuel": "Gasoline",
            "average": "11km/1 litre",
            "Type": "Automatic",
            "Price": 26000,
            "image":twelve
    
          },
          {
            "Name": "Lexus RX",
            "LaunchYear": 2023,
            "SitCapacity": 5,
            "fuel": "Hybrid",
            "average": "13km/1 litre",
            "Type": "Automatic",
            "Price": 48000,
            "image":thirteen
    
          },
          {
            "Name": "Subaru Outback",
            "LaunchYear": 2022,
            "SitCapacity": 5,
            "fuel": "Gasoline",
            "average": "10km/1 litre",
            "Type": "Automatic",
            "Price": 31000,
            "image":fourteen
    
          },
          {
            "Name": "Toyota Camry",
            "LaunchYear": 2022,
            "SitCapacity": 5,
            "fuel": "Gasoline",
            "average": "6km/1 litre",
            "Type": "Automatic",
            "Price": 25000,
            "image": one
          },
          {
            "Name": "Honda Civic",
            "LaunchYear": 2021,
            "SitCapacity": 5,
            "fuel": "Gasoline",
            "average": "5.5km/1 litre",
            "Type": "Automatic",
            "Price": 23000,
            "image":two
          },
          {
            "Name": "Ford F-150",
            "LaunchYear": 2023,
            "SitCapacity": 6,
            "fuel": "Diesel",
            "average": "7km/1 litre",
            "Type": "Automatic",
            "Price": 35000,
            "image":three
          },
          {
              "Name": "Tesla Model 3",
              "LaunchYear": 2023,
              "SitCapacity": 5,
              "fuel": "Electric",
              "average": "5km/1 kWh",
              "Type": "Electric",
              "Price": 40000,
              "image":four
            },
            {
              "Name": "Chevrolet Silverado",
              "LaunchYear": 2023,
              "SitCapacity": 6,
              "fuel": "Gasoline",
              "average": "8km/1 litre",
              "Type": "Automatic",
              "Price": 34000,
              "image":five
            },
            {
              "Name": "Nissan Altima",
              "LaunchYear": 2022,
              "SitCapacity": 5,
              "fuel": "Gasoline",
              "average": "11km/1 litre",
              "Type": "Automatic",
              "Price": 27000,
              "image":six
            },
            {
              "Name": "BMW X5",
              "LaunchYear": 2023,
              "SitCapacity": 5,
              "fuel": "Diesel",
              "average": "9km/1 litre",
              "Type": "Automatic",
              "Price": 55000,
              "image":seven
      
            },
            {
              "Name": "Jeep Wrangler",
              "LaunchYear": 2022,
              "Type": "Manual",
              "SitCapacity": 5,
              "fuel": "Diesel",
              "Price": 33000,
              "image":eight,
              "average": "9km/1 litre",
      
            },
            {
              "Name": "Hyundai Sonata",
              "LaunchYear": 2022,
              "SitCapacity": 5,
              "fuel": "Hybrid",
              "average": "16km/1 litre",
              "Type": "Automatic",
              "Price": 29000,
              "image":nine
      
            },
            {
              "Name": "Volkswagen Golf",
              "LaunchYear": 2022,
              "SitCapacity": 5,
              "fuel": "Diesel",
              "average": "15km/1 litre",
              "Type": "Automatic",
              "Price": 27000,
              "image":ten
      
            },
            {
              "Name": "Audi Q5",
              "LaunchYear": 2023,
              "SitCapacity": 5,
              "fuel": "Diesel",
              "average": "14km/1 litre",
              "Type": "Automatic",
              "Price": 50000,
              "image":eleven
      
            },
            {
              "Name": "Kia Sportage",
              "LaunchYear": 2022,
              "SitCapacity": 5,
              "fuel": "Gasoline",
              "average": "11km/1 litre",
              "Type": "Automatic",
              "Price": 26000,
              "image":twelve
      
            },
            {
              "Name": "Lexus RX",
              "LaunchYear": 2023,
              "SitCapacity": 5,
              "fuel": "Hybrid",
              "average": "13km/1 litre",
              "Type": "Automatic",
              "Price": 48000,
              "image":thirteen
      
            },
            {
              "Name": "Subaru Outback",
              "LaunchYear": 2022,
              "SitCapacity": 5,
              "fuel": "Gasoline",
              "average": "10km/1 litre",
              "Type": "Automatic",
              "Price": 31000,
              "image":fourteen
      
            },
            {
              "Name": "Toyota Camry",
              "LaunchYear": 2022,
              "SitCapacity": 5,
              "fuel": "Gasoline",
              "average": "6km/1 litre",
              "Type": "Automatic",
              "Price": 25000,
              "image": one
            },
            {
              "Name": "Honda Civic",
              "LaunchYear": 2021,
              "SitCapacity": 5,
              "fuel": "Gasoline",
              "average": "5.5km/1 litre",
              "Type": "Automatic",
              "Price": 23000,
              "image":two
            },
            {
              "Name": "Ford F-150",
              "LaunchYear": 2023,
              "SitCapacity": 6,
              "fuel": "Diesel",
              "average": "7km/1 litre",
              "Type": "Automatic",
              "Price": 35000,
              "image":three
            },
            {
              "Name": "Tesla Model 3",
              "LaunchYear": 2023,
              "SitCapacity": 5,
              "fuel": "Electric",
              "average": "5km/1 kWh",
              "Type": "Electric",
              "Price": 40000,
              "image":four
            }
             
              
             
             
              
     
  ]
  
  export default Products