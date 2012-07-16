class Bar < ActiveRecord::Base
  attr_accessible :address, :business_hours, :city, :country, :created_at, :description, :facebook_profile, :latidude, :longitude, :name, :postalcode, :province, :twitter_profile, :bar_type, :updated_at, :webpage, :photo, :tag_list
  
  acts_as_taggable
  acts_as_taggable_on :tags
  
  validates :name,  
            :presence   => true,
            :length     => { :maximum => 255 }
  validates_uniqueness_of :name        
  validates :address, 
            :presence   => true,
            :length     => { :maximum => 255 }                  
  validates :city, 
            :presence   => true,
            :length     => { :maximum => 255 } 
  validates :province, 
            :presence   => true,
            :length     => { :maximum => 255 } 
  validates :country, 
            :presence   => true,
            :length     => { :maximum => 255 } 
  validates :postalcode, 
            :presence   => true,
            :length     => { :maximum => 255 }                                       
  validates :latidude, 
            :presence   => true,
            :length     => { :maximum => 255 }
  validates :longitude, 
            :presence   => true,
            :length     => { :maximum => 255 } 
  validates :description, 
            :length     => { :maximum => 140 } 
  validates :tag_list, 
            :presence   => true,
            :length     => { :maximum => 255 }        
          
  has_attached_file :photo, :styles => { :medium => "300x300>", :thumb => "100x100>", :minithumb => "75x75" }
  
end
