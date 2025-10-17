

import json
import os
from datetime import datetime
from collections import defaultdict, Counter
import statistics

class AdvancedCommunityAnalyzer:
    def __init__(self, data_file='community_data.json'):
        """Initialize the analyzer with data"""
        self.data_file = data_file
        self.data = self.load_data()
        self.businesses = self.data.get('businesses', [])
        self.nonprofits = self.data.get('nonprofits', [])
        self.heroes = self.data.get('heroes', [])
        self.all_organizations = self.businesses + self.nonprofits + self.heroes
        
    def load_data(self):
        """Load community data from JSON file"""
        if not os.path.exists(self.data_file):
            print(f"Warning: {self.data_file} not found. Creating sample data...")
            return self.create_sample_data()
        
        try:
            with open(self.data_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading data: {e}")
            return self.create_sample_data()
    
    def create_sample_data(self):
        """Create sample data structure"""
        return {
            'businesses': [
                {
                    'id': 1,
                    'name': 'Restaurant A',
                    'category': 'business',
                    'year': '2010',
                    'stats': {'employees': 25, 'yearsActive': 15, 'communityEvents': 45}
                },
                {
                    'id': 2,
                    'name': 'Restaurant B',
                    'category': 'business',
                    'year': '2015',
                    'stats': {'employees': 18, 'yearsActive': 10, 'communityEvents': 30}
                },
                {
                    'id': 3,
                    'name': 'Restaurant C',
                    'category': 'business',
                    'year': '2018',
                    'stats': {'employees': 22, 'yearsActive': 7, 'communityEvents': 25}
                }
            ],
            'nonprofits': [
                {
                    'id': 4,
                    'name': 'Community Food Bank',
                    'category': 'nonprofit',
                    'year': '2008',
                    'stats': {'volunteers': 200, 'peopleServed': 15000, 'programsOffered': 8}
                },
                {
                    'id': 5,
                    'name': 'Youth Education Center',
                    'category': 'nonprofit',
                    'year': '2012',
                    'stats': {'volunteers': 150, 'peopleServed': 800, 'programsOffered': 12}
                },
                {
                    'id': 6,
                    'name': 'Senior Wellness Initiative',
                    'category': 'nonprofit',
                    'year': '2016',
                    'stats': {'volunteers': 80, 'peopleServed': 500, 'programsOffered': 6}
                }
            ],
            'heroes': [
                {
                    'id': 7,
                    'name': 'Fire Department',
                    'category': 'heroes',
                    'year': '1995',
                    'stats': {'members': 45, 'callsAnswered': 2500, 'livesImpacted': 50000}
                },
                {
                    'id': 8,
                    'name': 'Police Department',
                    'category': 'heroes',
                    'year': '1995',
                    'stats': {'members': 60, 'callsAnswered': 8000, 'livesImpacted': 75000}
                }
            ]
        }
    
    def calculate_total_impact(self):
        """Calculate total community impact metrics"""
        total_employees = sum(b['stats'].get('employees', 0) for b in self.businesses)
        total_volunteers = sum(n['stats'].get('volunteers', 0) for n in self.nonprofits)
        total_members = sum(h['stats'].get('members', 0) for h in self.heroes)
        total_people_served = sum(n['stats'].get('peopleServed', 0) for n in self.nonprofits)
        total_lives_impacted = sum(h['stats'].get('livesImpacted', 0) for h in self.heroes)
        total_events = sum(b['stats'].get('communityEvents', 0) for b in self.businesses)
        
        return {
            'total_workforce': total_employees + total_volunteers + total_members,
            'total_people_impacted': total_people_served + total_lives_impacted,
            'total_community_events': total_events,
            'total_organizations': len(self.all_organizations),
            'breakdown': {
                'employees': total_employees,
                'volunteers': total_volunteers,
                'first_responders': total_members
            }
        }
    
    def analyze_growth_by_year(self):
        """Analyze organization growth over time"""
        growth_data = defaultdict(lambda: {'count': 0, 'organizations': []})
        
        for org in self.all_organizations:
            year = int(org['year'])
            growth_data[year]['count'] += 1
            growth_data[year]['organizations'].append(org['name'])
        
        # Calculate cumulative growth
        cumulative = {}
        total = 0
        for year in sorted(growth_data.keys()):
            total += growth_data[year]['count']
            cumulative[year] = {
                'cumulative': total,
                'new_this_year': growth_data[year]['count'],
                'organizations': growth_data[year]['organizations']
            }
        
        return cumulative
    
    def category_breakdown(self):
        """Break down organizations by category with details"""
        return {
            'businesses': {
                'count': len(self.businesses),
                'percentage': len(self.businesses) / len(self.all_organizations) * 100,
                'names': [b['name'] for b in self.businesses]
            },
            'nonprofits': {
                'count': len(self.nonprofits),
                'percentage': len(self.nonprofits) / len(self.all_organizations) * 100,
                'names': [n['name'] for n in self.nonprofits]
            },
            'first_responders': {
                'count': len(self.heroes),
                'percentage': len(self.heroes) / len(self.all_organizations) * 100,
                'names': [h['name'] for h in self.heroes]
            }
        }
    
    def economic_impact_analysis(self):
        """Analyze economic impact of businesses"""
        if not self.businesses:
            return None
            
        total_employees = sum(b['stats'].get('employees', 0) for b in self.businesses)
        total_years_service = sum(b['stats'].get('yearsActive', 0) for b in self.businesses)
        total_events = sum(b['stats'].get('communityEvents', 0) for b in self.businesses)
        
        # Estimate economic impact
        avg_salary = 35000
        estimated_payroll = total_employees * avg_salary
        estimated_tax_revenue = estimated_payroll * 0.15  # Simplified tax estimate
        
        employees_list = [b['stats'].get('employees', 0) for b in self.businesses]
        
        return {
            'total_employees': total_employees,
            'combined_years_service': total_years_service,
            'total_events_hosted': total_events,
            'estimated_annual_payroll': estimated_payroll,
            'estimated_tax_revenue': estimated_tax_revenue,
            'avg_employees_per_business': statistics.mean(employees_list) if employees_list else 0,
            'median_employees': statistics.median(employees_list) if employees_list else 0,
            'employee_range': {
                'min': min(employees_list) if employees_list else 0,
                'max': max(employees_list) if employees_list else 0
            }
        }
    
    def social_impact_analysis(self):
        """Analyze social impact of nonprofits"""
        if not self.nonprofits:
            return None
            
        total_volunteers = sum(n['stats'].get('volunteers', 0) for n in self.nonprofits)
        total_served = sum(n['stats'].get('peopleServed', 0) for n in self.nonprofits)
        total_programs = sum(n['stats'].get('programsOffered', 0) for n in self.nonprofits)
        
        volunteers_list = [n['stats'].get('volunteers', 0) for n in self.nonprofits]
        served_list = [n['stats'].get('peopleServed', 0) for n in self.nonprofits]
        
        # Calculate volunteer hours (estimate)
        avg_volunteer_hours_per_year = 100
        total_volunteer_hours = total_volunteers * avg_volunteer_hours_per_year
        volunteer_value = total_volunteer_hours * 29.95  # Independent Sector value 2023
        
        return {
            'total_volunteers': total_volunteers,
            'total_people_served': total_served,
            'total_programs': total_programs,
            'avg_volunteers_per_org': statistics.mean(volunteers_list) if volunteers_list else 0,
            'avg_people_served_per_org': statistics.mean(served_list) if served_list else 0,
            'estimated_volunteer_hours': total_volunteer_hours,
            'estimated_volunteer_value': volunteer_value,
            'volunteer_to_served_ratio': total_volunteers / total_served if total_served else 0
        }
    
    def safety_impact_analysis(self):
        """Analyze impact of first responders"""
        if not self.heroes:
            return None
            
        total_members = sum(h['stats'].get('members', 0) for h in self.heroes)
        total_calls = sum(h['stats'].get('callsAnswered', 0) for h in self.heroes)
        total_impacted = sum(h['stats'].get('livesImpacted', 0)
